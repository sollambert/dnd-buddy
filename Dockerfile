FROM mcr.microsoft.com/dotnet/sdk:7.0 as build-env
WORKDIR /src
COPY . src
RUN dotnet restore src/*.csproj
RUN dotnet publish src/*.csproj -c Release -o /app/publish

FROM node:latest AS node-builder
WORKDIR /node
COPY ./ClientApp /node
RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/aspnet:7.0 as runtime
WORKDIR /app
RUN mkdir /app/wwwroot
COPY --from=build-env /app/publish .
COPY --from=node-builder /node/build ./wwwroot
ENV ASPNETCORE_URLS=http://*:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "dnd-buddy.dll"]