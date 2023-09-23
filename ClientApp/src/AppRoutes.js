import ApiAuthorzationRoutes from './Components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./Components/Counter";
import { FetchData } from "./Components/FetchData";
import Home from "./Views/Home/Home"
import Nav from './Components/Nav/Nav';
import CampaignDetails from './Views/Campaigns/CampaignDetails';
import Campaigns from './Views/Campaigns/Campaigns';
import CharacterDetails from './Views/Characters/CharacterDetails';
import Characters from './Views/Characters/Characters';
import Encounters from './Views/Encounters/Encounters';
import GPTHome from './Views/GPT/GPTHome';
import Resources from './Views/Resources/Resources';
import FourOFour from './Views/404/404';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/gpt',
    element: <GPTHome />
  },
  {
    path: '/campaigns',
    element: <Campaigns />
  },
  {
    path: '/campaigns/:id',
    element: <CampaignDetails />
  },
  {
    path: '/encounters',
    element: <Encounters />
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/characters/:id',
    element: <CharacterDetails />
  },
  {
    path: '/resources',
    element: <Resources />
  },
  {
    path: '/resources/:endpoint',
    element: <Resources />
  },
  {
    path: '/resources/:endpoint/:index',
    element: <Resources />
  },
  {
    path: '/resources/:endpoint/:index/:subindex',
    element: <Resources />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '*',
    element: <FourOFour/>
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
