# Cloud Home System

Cloud Home System is a simplified component of a Cloud-based Home System, allowing users to control lights. This project includes a front-end developed in AngularJS and a back-end REST API developed in .NET Core.

## Getting Started

### Prerequisites

- Node.js
- npm
- .NET Core SDK
- Angular CLI

### Installation

```bash
git clone https://github.com/your-username/cloud-home-system.git
cd cloud-home-system
npm install
dotnet restore
```

## Usage

```bash
ng serve # Run AngularJS app
dotnet run # Run .NET Core API
```

Access the app at `http://localhost:4200/` and the API at `https://localhost:5001/`.

## API Endpoints

- **GET /api/lights/status:** Get the current lights status.
- **POST /api/lights/toggle:** Toggle the lights on and off.

## Deployment on Azure

Deploy the API on Azure using Azure App Service. Ensure to set up the necessary Azure resources.

## Database Integration

Integrate Azure SQL Database for basic data storage needs. Configure the connection string in `appsettings.json`.

## Documentation

- Documented API endpoints and their usage.
- Overview of the application architecture.
- Instructions for setting up and running the project locally.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.

```vb
Feel free to adjust it further to match your project's specifics.
```

