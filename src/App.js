import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Privacy from "./Components/Privacy/Privacy";
import Career from "./Components/Career/Career";
import AndroidJob from "./Components/AndroidJob/AndroidJob";
import NetJob from "./Components/NetJob/NetJob";
import IOSJob from "./Components/iOSJob/IOSJob";
import PHPJob from "./Components/PHPJob/PHPJob";
import SEOJob from "./Components/SEOJob/SEOJob";
import WordPress from "./Components/WordPressJob/WordPress";
import DevOps from "./Components/Staff/DevOps/DevOps";
import IOS from "./Components/Staff/IOS/IOS";
import Mobile from "./Components/Staff/Mobile/Mobile";
import Net from "./Components/Staff/Net/Net";
import NodeDev from "./Components/Staff/NodeJS/NodeDev";
import PHP from "./Components/Staff/PHP/PHP";
import Python from "./Components/Staff/Python/Python";
import ReactDev from "./Components/Staff/ReactJS/ReactDev";
import REactNative from "./Components/Staff/ReactNative/REactNative";
import Ruby from "./Components/Staff/Ruby/Ruby";
import VoIP from "./Components/Staff/VoIP/VoIP";
import WebDev from "./Components/Staff/Web/WebDev";
import PHPBlog from "./Components/Blog/PHPBlog/PHPBlog";
import PythonBlog from "./Components/Blog/PythonBlog/PythonBlog";
import HeathCareBlog from "./Components/Blog/HeathCareBlog/HeathCareBlog";
import MobileAppBlog from "./Components/Blog/MobileAppBlog/MobileAppBlog";
import SoftwareBlog from "./Components/Blog/SoftwareBlog/SoftwareBlog";
import MobileBlog from "./Components/Blog/MobileBlog/MobileBlog";
import VoIPBlog from "./Components/Blog/VoIPBlog/VoIPBlog";
import BusinessBlog from "./Components/Blog/BusinessBlog/BusinessBlog";
import Asterisk from "./Components/Services/Asterisk/Asterisk";
import CallCenter from "./Components/Services/CallCenter/CallCenter";
import IVR from "./Components/Services/IVR/IVR";
import IP from "./Components/Services/IP/IP";
import FreeSwitch from "./Components/Services/FreeSwitch/FreeSwitch";
import Kamailio from "./Components/Services/Kamailio/Kamailio";
import VoIPBilling from "./Components/Services/VoIPBilling/VoIPBilling";
import ECommerce from "./Components/Services/E-commerce/ECommerce";
import CreateBlog from "./Components/CreateBlog/CreateBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          {/* Blog */}
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/php-features" element={<PHPBlog />} />
          <Route path="/python-development-trends" element={<PythonBlog />} />
          <Route
            path="/healthcare-software-development"
            element={<HeathCareBlog />}
          />
          <Route
            path="/mobile-application-for-your-business"
            element={<MobileAppBlog />}
          />
          <Route
            path="/choose-custom-software-development-company"
            element={<SoftwareBlog />}
          />
          <Route
            path="/mobile-app-development-is-important"
            element={<MobileBlog />}
          />
          <Route path="/voip-related-blog" element={<VoIPBlog />} />
          <Route
            path="/business-require-custom-software-development"
            element={<BusinessBlog />}
          />

          {/* create blog */}
          <Route path="/createblog" element={<CreateBlog />} />

          {/* Staff Augmentation */}
          <Route path="/DevOps-Development-service" element={<DevOps />} />
          <Route path="/IOS-Development-service" element={<IOS />} />
          <Route path="/mobile-Development-service" element={<Mobile />} />
          <Route path="/Net-development-service" element={<Net />} />
          <Route path="/NodeJS-development-service" element={<NodeDev />} />
          <Route path="/PHP-Development-service" element={<PHP />} />
          <Route path="/Python-Development-service" element={<Python />} />
          <Route path="/ReactJS-Development-service" element={<ReactDev />} />
          <Route
            path="/ReactNative-Development-service"
            element={<REactNative />}
          />
          <Route path="/Ruby-on-Rails-service" element={<Ruby />} />
          <Route path="/VoIP-Development-service" element={<VoIP />} />
          <Route path="/Web-Development-service" element={<WebDev />} />

          {/* services Route */}
          <Route path="/asterisk-development-services" element={<Asterisk />} />
          <Route
            path="/call-center-solution-services"
            element={<CallCenter />}
          />
          <Route path="/ivr-solution-services" element={<IVR />} />
          <Route path="/ip-pbx-solution" element={<IP />} />
          <Route
            path="/freeSwitch-development-services"
            element={<FreeSwitch />}
          />
          <Route path="/kamailio-development-services" element={<Kamailio />} />
          <Route path="/voip-billing-services" element={<VoIPBilling />} />
          <Route
            path="/e-commerce-development-services"
            element={<ECommerce />}
          />

          {/* Career Route */}
          <Route path="/job" element={<Career />} />
          <Route path="/android-developer" element={<AndroidJob />} />
          <Route path="/Net-developer" element={<NetJob />} />
          <Route path="/iOS-developer" element={<IOSJob />} />
          <Route path="/PHP-developer" element={<PHPJob />} />
          <Route path="/SEO-developer" element={<SEOJob />} />
          <Route path="/wordpress-developer" element={<WordPress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
