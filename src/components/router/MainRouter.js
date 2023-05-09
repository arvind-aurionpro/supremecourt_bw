

import Home from '../../pages/Home';
import { Route, Routes } from 'react-router-dom';
import ContectUs from '../../pages/ContectUs';
import ChiefJusticeAndJudges from '../../pages/Chief_Justice _&_Judges/ChiefJusticeAndJudges';
import NoticeAndCirculars from '../../pages/Notice_&_Circulars/NoticeAndCirculars';
import Statistics from '../../pages/Statistics/Statistics';
import CauseList from '../../pages/Cause_List/CauseList';
import Dashboard from '../../pages/Dashboard/Dashboard';
import JudgeProfile from '../../pages/Judge_profile/JudgeProfile'
import AccessbilityStatement from '../../pages/Accessbility_statement/AccessbilityStatement';
import CopyrightPolicy from '../../pages/Copyright_policy/CopyrightPolicy';
const MainRouter = () =>{

    return(
        <>
        
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/contect" element={<ContectUs />}/>  
          <Route exact path="/ChiefJusticeAndJudges" element={<ChiefJusticeAndJudges />}/>  
          <Route exact path="/NoticeAndCirculars" element={<NoticeAndCirculars />}/>
          <Route exact path="/Statistics" element={<Statistics />}/>
          <Route exact path="/CauseList" element={<CauseList />}/>
          <Route exact path="/Dashboard" element={<Dashboard />}/>
          <Route exact path="/JudgeProfile1" element={<JudgeProfile />}/>
          <Route exact path="/accessbilityStatement" element={<AccessbilityStatement />}/>
          <Route exact path="/copyrightPolicy" element={<CopyrightPolicy />}/>
        </Routes>
        
        </>
    )
}

export default MainRouter