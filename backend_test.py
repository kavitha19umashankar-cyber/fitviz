import requests
import sys
from datetime import datetime
import json

class FitVizAPITester:
    def __init__(self, base_url="https://workout-track-9.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_json = response.json()
                    print(f"   Response: {json.dumps(response_json, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response.json() if response.content else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )
        return success and 'status' in response and response['status'] == 'healthy'

    def test_root_endpoint(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET", 
            "api/",
            200
        )
        return success and 'message' in response

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "studio": "Test Fitness Studio",
            "message": "This is a test message for the contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success:
            # Validate response structure
            required_fields = ['id', 'name', 'email', 'studio', 'message', 'created_at']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            
            # Validate data integrity
            if response['name'] != test_data['name']:
                print(f"❌ Name mismatch: expected {test_data['name']}, got {response['name']}")
                return False
                
            if response['email'] != test_data['email']:
                print(f"❌ Email mismatch: expected {test_data['email']}, got {response['email']}")
                return False
                
            print("✅ Contact submission data validation passed")
            return True
            
        return False

    def test_get_contact_submissions(self):
        """Test retrieving contact submissions"""
        success, response = self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contact",
            200
        )
        
        if success:
            if isinstance(response, list):
                print(f"✅ Retrieved {len(response)} contact submissions")
                return True
            else:
                print("❌ Response should be a list")
                return False
        return False

    def test_demo_request(self):
        """Test demo request submission"""
        test_data = {
            "email": "demo@teststudio.com",
            "company": "Test Fitness Studio"
        }
        
        success, response = self.run_test(
            "Demo Request Submission",
            "POST",
            "api/demo-request",
            200,
            data=test_data
        )
        
        if success:
            required_fields = ['id', 'email', 'company', 'created_at']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            print("✅ Demo request data validation passed")
            return True
            
        return False

    def test_status_check_creation(self):
        """Test status check creation"""
        test_data = {
            "client_name": "test_client"
        }
        
        success, response = self.run_test(
            "Status Check Creation",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        
        if success:
            required_fields = ['id', 'client_name', 'timestamp']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            print("✅ Status check creation validation passed")
            return True
            
        return False

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )
        
        if success:
            if isinstance(response, list):
                print(f"✅ Retrieved {len(response)} status checks")
                return True
            else:
                print("❌ Response should be a list")
                return False
        return False

    def test_invalid_endpoint(self):
        """Test invalid endpoint returns 404"""
        success, response = self.run_test(
            "Invalid Endpoint",
            "GET",
            "api/nonexistent",
            404
        )
        return success

    def test_invalid_contact_data(self):
        """Test contact form with invalid data"""
        invalid_data = {
            "name": "",
            "email": "invalid-email",
            "message": ""
        }
        
        success, response = self.run_test(
            "Invalid Contact Data",
            "POST",
            "api/contact",
            422  # Expecting validation error
        )
        return success

def main():
    print("🚀 Starting FitViz API Testing...")
    print("=" * 50)
    
    # Setup
    tester = FitVizAPITester()
    
    # Run all tests
    test_results = []
    
    # Basic API tests
    test_results.append(("Health Check", tester.test_health_endpoint()))
    test_results.append(("API Root", tester.test_root_endpoint()))
    
    # Contact form tests
    test_results.append(("Contact Submission", tester.test_contact_submission()))
    test_results.append(("Get Contact Submissions", tester.test_get_contact_submissions()))
    
    # Demo request tests
    test_results.append(("Demo Request", tester.test_demo_request()))
    
    # Status check tests
    test_results.append(("Status Check Creation", tester.test_status_check_creation()))
    test_results.append(("Get Status Checks", tester.test_get_status_checks()))
    
    # Error handling tests
    test_results.append(("Invalid Endpoint", tester.test_invalid_endpoint()))
    test_results.append(("Invalid Contact Data", tester.test_invalid_contact_data()))

    # Print final results
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:<25} {status}")
    
    passed = sum(1 for _, result in test_results if result)
    total = len(test_results)
    
    print(f"\n📈 Overall: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
    
    if passed == total:
        print("🎉 All tests passed! Backend is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Check the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())