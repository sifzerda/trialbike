import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bubbles from './pages/Bubbles';
import Balls from './pages/Balls';
import Catapult from './pages/Catapult';
import Bike from './pages/Bike';
import Mousetrap from './pages/Mousetrap';

import Avalanche from './pages/Avalanche';

import BallPool from './pages/BallPool';
import Bridge from './pages/Bridge';
import Car from './pages/Car';
import Chains from './pages/Chains';
import CircleStack from './pages/CircleStack';
import Cloth from './pages/Cloth';
import CollisionFiltering from './pages/CollisionFiltering';
import CompositeManipulation from './pages/CompositeManipulation';
import CompoundBodies from './pages/CompoundBodies';
import CompoundStack from './pages/CompoundStack';
import Concave from './pages/Concave';
import Constraints from './pages/Constraints';
import DoublePendulum from './pages/DoublePendulum';
import Convex from './pages/Convex';
import AirHockey from './pages/AirHockey';
import Events from './pages/Events';
import Friction from './pages/Friction';
import Gravity from './pages/Gravity';
import Gyro from './pages/Gyro';
import Jigsaw from './pages/Jigsaw';
import Manipulation from './pages/Manipulation';
import Mixed from './pages/Mixed';
import Motor from './pages/Motor';
import NewtonsCradle from './pages/NewtonsCradle';
import Pyramid from './pages/Pyramid';
import Ragdoll from './pages/Ragdoll';
import Raycasting from './pages/Raycasting';
import Restitution from './pages/Restitution';
import Rounded from './pages/Rounded';
import Sensors from './pages/Sensors';
import Sleeping from './pages/Sleeping';
import Slingshot from './pages/Slingshot';
import SoftBody from './pages/SoftBody';
import Sprites from './pages/Sprites';
import Stack from './pages/Stack';
import StaticFriction from './pages/StaticFriction';
import StatsPerformance from './pages/StatsPerformance';
import Stress from './pages/Stress';
import Stress2 from './pages/Stress2';
import Stress3 from './pages/Stress3';
import Stress4 from './pages/Stress4';
import Substep from './pages/Substep';
import Svg from './pages/Svg';
import Terrain from './pages/Terrain';
import Timescale from './pages/Timescale';
import Views from './pages/Views';
import WreckingBall from './pages/WreckingBall';
import AirFriction from './pages/AirFriction';

// Render the application without React.StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="avalanche" element={<Avalanche />} />
        <Route path="airfriction" element={<AirFriction />} />

        <Route path="bubbles" element={<Bubbles />} />
        <Route path="ball" element={<Balls />} />
        <Route path="catapult" element={<Catapult />} />
        <Route path="bike" element={<Bike />} />
        <Route path="mousetrap" element={<Mousetrap />} />

<Route path='ballpool' element={<BallPool />} />
<Route path='bridge' element={<Bridge />} />
<Route path='car' element={<Car />} />
<Route path='catapult' element={<Catapult />} />
<Route path='circlestack' element={<CircleStack />} />
<Route path='cloth' element={<Cloth />} />
<Route path='chains' element={<Chains />} />
<Route path='collisionfiltering' element={<CollisionFiltering />} />
<Route path='compositemanipulation' element={<CompositeManipulation />} />
<Route path='compoundbodies' element={<CompoundBodies />} />
<Route path='compoundstack' element={<CompoundStack />} />
<Route path='concave' element={<Concave />} />
<Route path='constraints' element={<Constraints />} />
<Route path='convex' element={<Convex />} />
<Route path='doublependulum' element={<DoublePendulum />} />
<Route path='events' element={<Events />} />
<Route path='friction' element={<Friction />} />
<Route path='gravity' element={<Gravity />} />
<Route path='gyro' element={<Gyro />} />
<Route path='jigsaw' element={<Jigsaw />} />
<Route path='manipulation' element={<Manipulation />} />
<Route path='mixed' element={<Mixed />} />
<Route path='motor' element={<Motor />} />
<Route path='newtonsCradle' element={<NewtonsCradle />} />
<Route path='pyramid' element={<Pyramid />} />
<Route path='ragdoll' element={<Ragdoll />} />
<Route path='raycasting' element={<Raycasting />} />
<Route path='restitution' element={<Restitution />} />
<Route path='rounded' element={<Rounded />} />
<Route path='sensors' element={<Sensors />} />
<Route path='sleeping' element={<Sleeping />} />
<Route path='slingshot' element={<Slingshot />} />
<Route path='softbody' element={<SoftBody />} />
<Route path='sprites' element={<Sprites />} />
<Route path='stack' element={<Stack />} />
<Route path='staticfriction' element={<StaticFriction />} />
<Route path='statsperformance' element={<StatsPerformance />} />
<Route path='stress' element={<Stress />} />
<Route path='stress2' element={<Stress2 />} />
<Route path='stress3' element={<Stress3 />} />
<Route path='stress4' element={<Stress4 />} />
<Route path='substep' element={<Substep />} />
<Route path='svg' element={<Svg />} />
<Route path='terrain' element={<Terrain />} />
<Route path='airhockey' element={<AirHockey />} />
<Route path='timescale' element={<Timescale />} />
<Route path='views' element={<Views />} />
<Route path='wreckingball' element={<WreckingBall />} />

<Route path='mixed' element={<Mixed />} />


      </Route>
    </Routes>
  </Router>
);