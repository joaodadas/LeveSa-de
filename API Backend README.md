
# **Backend Agenda API**

## **Overview**

This project is a backend API built with **Node.js, TypeScript**, and the **Serverless Framework**. It provides two endpoints:

1. **GET /agendas**: Returns a list of doctors with their available schedules.
2. **POST /agendamento**: Books an appointment with a doctor.

The data returned is **mocked**, meaning no real database is used. This API follows best practices for clean code, error handling, and REST architecture.

---

## **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js
- **Serverless Framework** installed globally:
  ```bash
  npm install -g serverless
  ```

---

## **Installation**

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend-agenda
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## **Running the API Locally**

Use **`serverless-offline`** to run the API locally. This simulates the AWS Lambda environment for testing purposes.

1. **Start the server**:
   ```bash
   npm start
   ```

2. **API available at**:  
   `http://localhost:3000`

---

## **API Endpoints**

### **1. GET /agendas**

Returns a list of doctors with their specialties and available schedules.

- **Request**:
  ```bash
  curl http://localhost:3000/dev/agendas
  ```

- **Response**:
  ```json
  {
    "medicos": [
      {
        "id": 1,
        "nome": "Dr. João Silva",
        "especialidade": "Cardiologista",
        "horarios_disponiveis": [
          "2024-10-05 09:00",
          "2024-10-05 10:00",
          "2024-10-05 11:00"
        ]
      },
      {
        "id": 2,
        "nome": "Dra. Maria Souza",
        "especialidade": "Dermatologista",
        "horarios_disponiveis": [
          "2024-10-06 14:00",
          "2024-10-06 15:00"
        ]
      }
    ]
  }
  ```

---

### **2. POST /agendamento**

Books an appointment with a doctor.

- **Request**:
  ```bash
  curl -X POST http://localhost:3000/dev/agendamento   -H "Content-Type: application/json"   -d '{
    "medico_id": 1,
    "paciente_nome": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }'
  ```

- **Response**:
  ```json
  {
    "mensagem": "Agendamento realizado com sucesso",
    "agendamento": {
      "medico": "Dr. João Silva",
      "paciente": "Carlos Almeida",
      "data_horario": "2024-10-05 09:00"
    }
  }
  ```

- **Error Response (Doctor Not Found)**:
  ```json
  {
    "mensagem": "Médico não encontrado"
  }
  ```

---

## **Running Tests**

The project includes **unit tests** using **Jest** to ensure the business logic works as expected. To run all tests:

```bash
npm test
```

### **Expected Output**:

```
PASS  src/tests/agendaController.test.ts
PASS  src/tests/agendamentoController.test.ts
PASS  src/tests/validator.test.ts

Test Suites: 3 passed, 3 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.128 s, estimated 2 s
```

---

## **Linting and Formatting**

Ensure your code follows the correct style and formatting using **Prettier** and **ESLint**.

1. **Check for linting errors**:
   ```bash
   npm run lint
   ```

2. **Format the code with Prettier**:
   ```bash
   npm run format
   ```

---

## **Project Structure**

The project follows a **clean architecture** with controllers, DTOs, mocks, and utility functions.

```
/src
  /agenda              # Domain logic for agendas
    /controller        # Controller for agenda logic
    /mocks             # Mocked data for doctors
  /agendamento         # Domain logic for appointments
    /controller        # Controller for appointment logic
    /dto               # DTOs for appointment data
  /utils               # Utility functions (e.g., validators)
  /tests               # Jest unit tests
```

---

## **Error Handling**

The API returns proper **HTTP status codes** and error messages:

- **200 OK**: Successful request.
- **201 Created**: Appointment successfully booked.
- **404 Not Found**: Doctor not found.
- **500 Internal Server Error**: Unexpected server error.

---

## **Deployment Instructions**

Once the API is tested locally, you can deploy it to AWS using the **Serverless Framework**.

1. **Configure AWS credentials**:
   ```bash
   serverless config credentials --provider aws --key <AWS_KEY> --secret <AWS_SECRET>
   ```

2. **Deploy to AWS**:
   ```bash
   serverless deploy
   ```

3. **After deployment**, the API will be accessible at the URL provided in the deployment output.

---

## **Contributing**

Feel free to contribute by opening pull requests or submitting issues.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Conclusion**

This README provides all necessary instructions to run, test, and deploy the API locally and on AWS. If you encounter any issues or have questions, feel free to submit an issue or reach out.
