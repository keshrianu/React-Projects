import ContactForm from "./componenets/ContactForm";
import Counter from "./componenets/Counter";
import DataTable from "./componenets/DataTable";
import FileExplorer from "./componenets/FileExplorer";
import HolyGrail from "./componenets/HolyGrail";
import MortageCalculator from "./componenets/MortageCalculator";
import ReactTab from "./componenets/ReactTab";
import "./index.css";
import data from "./data.json";
import Modal from "./componenets/Modal/Modal";
import Todo from "./componenets/Todo/Todo";
import TrafficLight from "./componenets/TrafficLight";
import DigitalClock from "./componenets/DigitalClock";
import Imagecarousel from "./componenets/Imagecarousel";
import JobBoard from "./componenets/JobBoard.jsx/JobBoard";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componenets/NavBar";
import Faq from "./componenets/Accordion/Faq";
import UserTable from "./componenets/UserTable";
import UseReducer from "./componenets/UseReducer";
import ProgressBar from "./componenets/ProgressBar";

function App() {
  return (
    <>
    <NavBar className="mb-6" />
      <Routes>
        <Route path="/use_reducer" element={<UseReducer />} />
        <Route path="/progess_bar" element={<ProgressBar />} />
        <Route path="/job_board" element={<JobBoard />} />
        <Route path="/contact_form" element={<ContactForm />} />
        <Route path="/" element={<Counter />} />
        <Route path="/HolyGrail" element={<HolyGrail />} />
        <Route path="/MortageCalculator" element={<MortageCalculator />} />
        <Route path="/ReactTab" element={<ReactTab />} />
        <Route path="/DataTable" element={<DataTable />} />
        <Route
          path="/FileExplorer"
          element={<FileExplorer folderData={data} />}
        />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/TrafficLight" element={<TrafficLight />} />
        <Route path="/DigitalClock" element={<DigitalClock />} />
        <Route path="/Imagecarousel" element={<Imagecarousel />} />
        <Route path ="/Accordion" element={<Faq />} />
        <Route path ="/UserTable" element={<UserTable />} />
      </Routes>
    </>
  );
}

export default App;
