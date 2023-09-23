FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["dnd-buddy.csproj", "dnd-buddy/"]
RUN dotnet restore "dnd-buddy/dnd-buddy.csproj"
WORKDIR "/src/dnd-buddy"
COPY . .
RUN dotnet build "dnd-buddy.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "dnd-buddy.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://*:5000
EXPOSE 3000
EXPOSE 5000
ENTRYPOINT ["dotnet", "dnd-buddy.dll"]