import React from 'react'
import '../common/template/dependencies.js'
import Header from '../common/template/header.jsx';
import Sidebar from '../common/template/sideBar.jsx';
import Footer from '../common/template/footer.jsx';
import Router from './routes'
import Messages from '../common/msg/messages.jsx';





export default props => (
    <div className='wrapper'>
       <Header />
       <Sidebar/>
       <div className='content-wrapper'>
          <Router/>
       </div>
       <Footer/>
       <Messages/>
    </div>
)