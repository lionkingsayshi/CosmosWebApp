# Use the SDK image as the base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

# Copy the project file and restore dependencies
COPY ["CosmosApi/CosmosApi.csproj", "CosmosApi/"]
RUN dotnet restore "CosmosApi/CosmosApi.csproj"

# Copy the rest of the application code
COPY . .

# Build the application
RUN dotnet publish "CosmosApi/CosmosApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app

# Copy the published files from the build stage
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "CosmosApi.dll"]
