# External API Proxy - NestJS Companies Module

A production-ready NestJS application demonstrating external API integration, module architecture, dependency injection, and configuration management. This application acts as a proxy to fetch company data from JSONPlaceholder API and serves it through RESTful endpoints with comprehensive documentation using Swagger.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Postman Collection](#postman-collection)
- [Error Handling](#error-handling)
- [Tech Stack](#tech-stack)

## ✨ Features

- **Module Architecture**: Well-structured NestJS modules with proper separation of concerns
- **Dependency Injection**: Leverages NestJS DI container for loose coupling and testability
- **Configuration Management**: Environment-based configuration with validation
- **External API Integration**: Seamless integration with JSONPlaceholder API using axios
- **Error Handling**: Comprehensive error handling with meaningful HTTP status codes
- **Logging**: Structured logging using Winston
- **Testing**: Full test coverage with Jest (unit tests for service and controller)
- **Swagger Documentation**: Interactive API documentation
- **TypeScript**: Fully typed for better development experience

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **Git**: For version control
- **Postman**: For API testing (optional but recommended)

## 📂 Project Structure

```
src/
├── app.module.ts                           # Root module
├── main.ts                                 # Application entry point
├── config/
│   ├── configuration.ts                    # Configuration management
│   └── env.validation.ts                   # Environment validation
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts       # Global exception filter
│   └── logger/
│       ├── logger.module.ts                # Logger module
│       └── winston.config.ts               # Winston configuration
└── modules/
    └── companies/
        ├── companies.module.ts             # Companies module
        ├── companies.controller.ts         # Companies controller
        ├── companies.service.ts            # Companies service
        ├── companies.controller.spec.ts    # Controller tests
        ├── companies.service.spec.ts       # Service tests
        ├── interfaces/
        │   └── company.interface.ts        # Company interface
        └── dto/
            ├── company.dto.ts              # Company DTOs
            └── get-companies.query.ts      # Query parameters

test/
├── jest-e2e.json                           # E2E test configuration
```

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
cd c:\Users\RohitGhosh\EPAM\nest-proxy-layer-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Swagger Dependencies

```bash
npm install @nestjs/swagger swagger-ui-express
```

> **Note**: If Swagger is not already installed, run the above command to add it to your project.

### Step 4: Verify Environment Configuration

Check the `.env` file in the root directory:

```env
# Application
PORT=3000
NODE_ENV=development
LOG_LEVEL=debug

# External API Configuration (JSONPlaceholder)
API_BASE_URL=https://jsonplaceholder.typicode.com
API_REQUEST_TIMEOUT_MS=10000

# BigCommerce B2B API (Optional)
BIGCOMMERCE_B2B_API_BASE_URL=https://api-b2b.bigcommerce.com/api/v3/io
BIGCOMMERCE_B2B_AUTH_TOKEN=your_token
BIGCOMMERCE_B2B_STORE_HASH=your_hash
BIGCOMMERCE_B2B_REQUEST_TIMEOUT_MS=15000
```

If `.env` file doesn't exist, you can copy from `.env.example`:

```bash
cp .env.example .env
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Application port | 3000 |
| `NODE_ENV` | Environment (development/production) | development |
| `LOG_LEVEL` | Logging level (debug/info/warn/error) | info |
| `API_BASE_URL` | External API base URL | https://jsonplaceholder.typicode.com |
| `API_REQUEST_TIMEOUT_MS` | Request timeout in milliseconds | 10000 |

### Configuration Classes

The application uses NestJS `ConfigModule` to manage environment variables. Configuration is defined in `src/config/configuration.ts`:

```typescript
export interface ExternalApiConfig {
  baseUrl: string;
  timeoutMs: number;
}
```

## 🏃 Running the Application

### Development Mode

Start the application in watch mode with hot reload:

```bash
npm run start:dev
```

The application will start at `http://localhost:3000/api`

### Production Mode

Build and run the production version:

```bash
npm run build
npm run start:prod
```

### Debug Mode

Run the application in debug mode:

```bash
npm run start:debug
```

The debugger will listen on port 9229.

## 📚 API Documentation

Interactive Swagger documentation is available at:

```
http://localhost:3000/api/docs
```

Once the application is running, open this URL in your browser to:
- View all available endpoints
- See request/response schemas
- Test endpoints directly from the UI
- Download the OpenAPI specification

## 🔌 API Endpoints

### 1. Get All Companies

**Endpoint**: `GET /api/companies`

**Description**: Fetch all companies from the external API

**Response**: Array of company objects

**Status Codes**:
- `200 OK` - Companies fetched successfully
- `502 Bad Gateway` - Failed to fetch from external API

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "Romaguera-Crona",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "hildegard.org",
    "address": {
      "street": "Kulas Light",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    }
  },
  {
    "id": 2,
    "name": "Deckow-Crist",
    "email": "Shanna@melissa.tv",
    "phone": "9012589482",
    "website": "anastasia.net",
    "address": {
      "street": "Hoeger Mall",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    }
  }
]
```

### 2. Get Single Company by ID

**Endpoint**: `GET /api/companies/:id`

**Description**: Fetch a specific company by ID

**Parameters**:
- `id` (path parameter, required): Company ID (number)

**Response**: Single company object

**Status Codes**:
- `200 OK` - Company found
- `404 Not Found` - Company not found
- `502 Bad Gateway` - Failed to fetch from external API

**Example URL**: `GET /api/companies/1`

**Example Response**:
```json
{
  "id": 1,
  "name": "Romaguera-Crona",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031",
  "website": "hildegard.org",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  }
}
```

## ✅ Testing

### Run All Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:cov
```

Coverage reports will be generated in the `coverage/` directory.

### Test Files

- **Service Tests**: `src/modules/companies/companies.service.spec.ts`
  - Tests API call functionality
  - Tests error handling
  - Tests error logging
  
- **Controller Tests**: `src/modules/companies/companies.controller.spec.ts`
  - Tests endpoint responses
  - Tests request logging
  - Tests parameter validation

### Example Test Output

```
PASS  src/modules/companies/companies.service.spec.ts
  CompaniesService
    getCompanies
      ✓ should return an array of companies (15ms)
      ✓ should return empty array when no companies are returned (3ms)
      ✓ should handle 502 Bad Gateway error (8ms)
      ✓ should handle 500 Internal Server Error (4ms)
      ✓ should use correct base URL (2ms)
    getCompanyById
      ✓ should return a single company (4ms)
      ✓ should handle 404 Not Found error (5ms)
      ✓ should use correct URL with company ID (3ms)
      ✓ should handle network errors gracefully (6ms)

PASS  src/modules/companies/companies.controller.spec.ts
  CompaniesController
    getCompanies
      ✓ should return an array of companies (8ms)
      ✓ should handle empty list of companies (2ms)
      ✓ should log the request (3ms)
    getCompanyById
      ✓ should return a single company by ID (5ms)
      ✓ should handle different company IDs (2ms)
```

## 📮 Postman Collection

### Import the Collection

1. Open Postman
2. Click **Import** → **Link**
3. Use the collection JSON provided below or create requests manually

### Manual Setup in Postman

#### Step 1: Create a New Collection

1. Click **Collections** → **+** (Create New Collection)
2. Name: `Companies API`
3. Click **Create**

#### Step 2: Create Environment Variables

1. Click **Environments** → **+** (Create New)
2. Name: `Local Development`
3. Add variables:
   - `baseUrl`: `http://localhost:3000/api`
   - `companyId`: `1`

#### Step 3: Create Requests

##### Request 1: Get All Companies

- **Name**: Get All Companies
- **Method**: `GET`
- **URL**: `{{baseUrl}}/companies`
- **Headers**:
  - `Content-Type`: `application/json`
- **Tests** (Optional - to validate response):
```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response is an array", function () {
  pm.expect(pm.response.json()).to.be.an('array');
});

pm.test("Company has required fields", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData[0]).to.have.property('id');
  pm.expect(jsonData[0]).to.have.property('name');
  pm.expect(jsonData[0]).to.have.property('email');
});
```

##### Request 2: Get Company by ID

- **Name**: Get Company by ID
- **Method**: `GET`
- **URL**: `{{baseUrl}}/companies/{{companyId}}`
- **URL Params**:
  - `companyId`: `1` (can be changed)
- **Headers**:
  - `Content-Type`: `application/json`
- **Tests** (Optional):
```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Company name exists", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property('name');
});

pm.test("Company ID matches request", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.id).to.equal(parseInt(pm.variables.get('companyId')));
});
```

### Using the Collection

1. Set the environment to `Local Development`
2. Ensure the application is running (`npm run start:dev`)
3. Select the request and click **Send**
4. View the response in the Response panel

### Sample Requests

**Get All Companies:**
```
GET http://localhost:3000/api/companies
```

**Get Specific Company (ID: 5):**
```
GET http://localhost:3000/api/companies/5
```

**Get Specific Company (ID: 10):**
```
GET http://localhost:3000/api/companies/10
```

## 🚨 Error Handling

The application implements comprehensive error handling with meaningful HTTP status codes and error messages.

### Error Response Format

All error responses follow this structure:

```json
{
  "statusCode": 502,
  "message": "Failed to fetch companies from external API",
  "error": "Bad Gateway"
}
```

### Common Error Scenarios

| Status Code | Scenario | Example |
|-------------|----------|---------|
| 400 | Bad Request | Invalid query parameters |
| 404 | Not Found | Company ID doesn't exist |
| 502 | Bad Gateway | External API is unreachable |
| 503 | Service Unavailable | External API is down |
| 504 | Gateway Timeout | Request timeout exceeded |

### Example Error Responses

**Company Not Found (404):**
```json
{
  "statusCode": 404,
  "message": "Failed to fetch companies from external API",
  "error": "Bad Gateway"
}
```

**External API Unavailable (502):**
```json
{
  "statusCode": 502,
  "message": "Failed to fetch companies from external API",
  "error": "Bad Gateway"
}
```

### Error Handling in Code

The `CompaniesService` handles errors gracefully:

```typescript
private handleAxiosError(error: unknown, url: string): never {
  const axiosError = error as AxiosError;
  const status = axiosError?.response?.status ?? HttpStatus.BAD_GATEWAY;

  this.logger.error('Failed to fetch from external API', {
    url,
    status,
    message: axiosError?.message,
  });

  throw new HttpException(
    {
      statusCode: status >= 400 && status < 600 ? status : HttpStatus.BAD_GATEWAY,
      message: 'Failed to fetch companies from external API',
      error: 'Bad Gateway',
    },
    status >= 400 && status < 600 ? status : HttpStatus.BAD_GATEWAY,
  );
}
```

## 🛠️ Tech Stack

### Core Framework
- **NestJS** (^11.0.1) - Progressive Node.js framework
- **TypeScript** (^5.7.3) - Typed superset of JavaScript

### HTTP & API
- **@nestjs/axios** (^4.0.1) - Axios HTTP client module
- **axios** (^1.15.2) - HTTP client library
- **@nestjs/swagger** - API documentation

### Configuration & Environment
- **@nestjs/config** (^4.0.4) - Configuration module
- **class-validator** - Data validation
- **class-transformer** - Data transformation

### Logging
- **nest-winston** (^1.10.2) - Winston logger integration
- **winston** (^3.19.0) - Logger library

### Testing
- **@nestjs/testing** (^11.0.1) - Testing utilities
- **Jest** (^30.0.0) - Testing framework
- **ts-jest** (^29.2.5) - TypeScript Jest transformer

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Node Inspector** - Debugging

## 📝 Logging

The application uses Winston for structured logging. All API calls and errors are logged with:

- **Timestamp**: When the event occurred
- **Level**: Log level (debug, info, warn, error)
- **Message**: Human-readable message
- **Context**: Additional information (URL, status code, error details)

### Example Logs

```
[2024-01-15 10:30:45.123] [info] Fetching companies from external API { url: 'https://jsonplaceholder.typicode.com/users' }
[2024-01-15 10:30:45.456] [debug] Companies fetched successfully { count: 10 }
[2024-01-15 10:30:46.789] [info] GET /api/companies - Fetching all companies
```

## 🔄 Workflow

### Application Flow

```
Request → Controller → Service → HttpService → External API
                                     ↓
                            Handle Response/Error
                                     ↓
Response ← Controller Response ← Service
```

### Request Flow Example

1. **User Request**: `GET /api/companies/1`
2. **Controller**: Validates input and logs request
3. **Service**: Builds URL, calls external API
4. **HttpService**: Makes HTTP request via axios
5. **External API**: Returns company data
6. **Response Pipeline**: Processes response back to user

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Swagger/OpenAPI Documentation](https://swagger.io/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Jest Testing Documentation](https://jestjs.io/)
- [Postman Learning Center](https://learning.postman.com/)

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Change port via environment variable
PORT=3001 npm run start:dev
```

### Module Not Found Errors

If you encounter module import errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tests Failing

If tests are failing:

```bash
# Clear Jest cache
npm test -- --clearCache

# Run tests again
npm test
```

### External API Unreachable

If the JSONPlaceholder API is unreachable:

1. Check your internet connection
2. Verify the API_BASE_URL in `.env`
3. Test connectivity: `curl https://jsonplaceholder.typicode.com/users`

## 📄 License

This project is licensed under the UNLICENSED license.

## 👨‍💼 Author

EPAM Systems - NestJS Learning Project

---

**Last Updated**: January 2024
**Version**: 1.0.0
