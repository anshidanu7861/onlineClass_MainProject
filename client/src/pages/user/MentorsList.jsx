import React from "react";
import MentorListStdSide from '../../components/studentDashboard/MentorListStdSide'
import StudentNavbar from "../../components/navbar/StudentNavbar";
import StudentSideNav from "../../components/navbar/StudentSideNav";
import MentorNavbar from "../../components/navbar/mentorNavbar";
import MentorSideNav from "../../components/navbar/MentorSideNav";

function MentorsListStdPage () {
    return (
        <div className="flex">
            <div>
            <StudentSideNav/>
                
            </div>
            <div className="w-full">
            <StudentNavbar/>
                <div className="p-6">

                <MentorListStdSide/>
                </div>
            </div>
        </div>
    )
}

export default MentorsListStdPage