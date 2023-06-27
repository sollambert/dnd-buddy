<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">D&D Buddy</h3>

  <p align="center">
    D&D Buddy is an application that allows dungeon masters to organize campaigns, encounters, and NPCs to bring their game to the next level. Utilizes ChatGPT to aid description generation for created campaign assets and a handy hook-in to the 5e SRD API. Currently in development.
    <br />
    <a href="https://github.com/sollambert/dnd-buddy"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">Live Deployment</a>
    ·
    <a href="https://github.com/sollambert/dnd-buddy/issues">Report Bug</a>
    ·
    <a href="https://github.com/sollambert/dnd-buddy/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<img src="https://raw.githubusercontent.com/sollambert/dnd-buddy/main/ClientApp/public/favicon.ico" alt="Logo">

D&D Buddy was designed to alleviate the stress of running a campaign for the average DM. Ever spent 6 hours planning an adventure for your party and they just spend all their time in the tavern and immediately kill the nearest guard after taking one step out of the door? D&D Buddy will help alleviate the frustration by letting AI write the descriptions and conversation points for you. Got a player that won't ever stop arguing about the rules? With the 5e SRD API you can quickly find any rule in the SRD with easy to use navigation to shut them up for at least the next five minutes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Languages Used

[![Typescript]][Typescript] [![Javascript]][Javascript] [![C Sharp]][C Sharp]

### Built With

[![React][React.js]][React-url] [![Net][Net]][Net-url] [![Node.js][Node.js]][Node-url] [![Postgres][postgres]][postgres-url] [![docker][docker]][docker-url] [![Redux][Redux]][Redux-url] [![Redux-Saga][Reduxsaga]][Reduxsaga-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get your deployment working on a local machine!

### Prerequisites

To install the dependencies, make sure you're running at least version 18 of Node and version 7.0 of .Net with Entity Framework installed as well.

[Node](https://nodejs.org/en)

[.Net](https://dotnet.microsoft.com/en-us/)

[.Net Entity Framework](https://learn.microsoft.com/en-us/ef/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sollambert/dnd-buddy.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install .Net packages
   ```sh
   dotnet restore
   ```
4. Create your database with postresql
5. Update the database with the tables created by entity framework
   ```sh
   dotnet ef database update
   ```
6. Create a .env file in the root directory containing your api key for OpenAI's GPT API
   ```
   OPENAI_API_KEY=<insert key here>
   ```
7. Run the server
   ```sh
   dotnet run
   ```
8. Run the client
   ```sh
   npm start
   ```
9. Connect to the local site with a web browser at [localhost](http://localhost:3000)
    

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_Under construction_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Solomon Lambert - https://github.com/sollambert

Project Link: [Deployment](https://github.com/sollambert/dnd-buddy)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/sollambert/cloud-quest.svg?style=for-the-badge
[license-url]: https://github.com/sollambert/cloud-quest/blob/main/LICENSE.TXT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sollambert
[Net]: https://img.shields.io/badge/%2ENET-20232A?style=for-the-badge&logo=dotnet&logoColor=61DAFB
[Net-url]: https://dotnet.microsoft.com/en-us/
[docker]: https://img.shields.io/badge/Docker-30333a?style=for-the-badge&logo=docker&logoColor=4796e6
[docker-url]: https://www.docker.com/
[Node.js]: https://img.shields.io/badge/Node.js-30333a?style=for-the-badge&logo=nodedotjs&logoColor=4FA34D
[Node-url]: https://nodejs.org/
[postgres]: https://img.shields.io/badge/Postgres-20232A?style=for-the-badge&logo=postgresql&logoColor=2C6790
[postgres-url]: https://www.postgresql.org/
[Redux]: https://img.shields.io/badge/Redux-30333a?style=for-the-badge&logo=redux&logoColor=7747BA
[Redux-url]: https://redux.js.org/
[Reduxsaga]: https://img.shields.io/badge/Redux-Sagas-30333a?style=for-the-badge&logo=reduxsaga&logoColor=82D473
[Reduxsaga-url]: https://redux-saga.js.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

<!-- Languages -->
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=1f77c7
[C Sharp]: https://img.shields.io/badge/C%23-20232A?style=for-the-badge&logo=csharp&logoColor=189f20
[Javascript]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=EFD81D
