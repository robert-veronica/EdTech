import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
// import HomeV1 from './components/home-v1';
// import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import Course from './components/course';
import CourseDetails from './components/course-details';
import VirtualDetails from './components/virtual-details';
import About from './components/about';
import Event from './components/event';
import EventDetails from './components/event-details';
// import Trainer from './components/trainer';
import Admin from './components/admin';
import Pricing from './components/pricing';
import Gallery from './components/gallery';
import SignIn from './components/sign-in';
import RegisterCourse from './components/register-course';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Vclassroom from './components/section-components/vclassroom';
import Virtual from "./components/virtual";
import { ToastContainer } from 'react-toastify';
import Trainers from './components/trainers';
import Mentors from './components/mentors';
import TrainerDetail from './components/section-components/trainerDetail';
import MentorDetail from './components/section-components/mentorDetail';



class Root extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <ToastContainer />
                    <Switch>
                        <Route exact path="/" component={HomeV3} />
                        <Route path="/course" component={Course} />
                        <Route path="/virtual" component={Virtual} />
                        <Route path="/course-details" component={CourseDetails} />
                        <Route path="/virtual-details" component={VirtualDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/event" component={Event} />
                        <Route path="/event-details" component={EventDetails} />
                        {/* <Route path="/trainer" component={Trainer} /> */}
                        <Route path="/admin" component={Admin} />
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/register-course" component={RegisterCourse} />
                        <Route path="/vclassroom" component={Vclassroom} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/blog-details" component={BlogDetails} />
                        <Route path="/trainers" component={Trainers} />
                        <Route path="/mentors" component={Mentors} />
                        <Route exact path="/trainer/:id" component={TrainerDetail} />
                        <Route exact path="/mentor/:id" component={MentorDetail} />



                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('edumint'));
