FROM node:latest AS node_base
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build-env
WORKDIR /src
COPY . src
RUN dotnet restore src/*.csproj
RUN dotnet publish src/*.csproj -c Release -o /src/publish


FROM mcr.microsoft.com/dotnet/aspnet:7.0 as runtime
COPY --from=node_base . .
WORKDIR /node
COPY . /node
RUN npm i
RUN npm run build
WORKDIR /publish
COPY --from=build-env /src/publish .
# RUN ls -a ..
ENV ASPNETCORE_URLS=http://*:5000
EXPOSE 3000
# EXPOSE 8080
ENTRYPOINT ["dotnet", "dnd-buddy.dll"]
# RUN npm start