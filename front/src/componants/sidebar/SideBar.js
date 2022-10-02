import React from 'react'
import './sidebar.css'
import {HomeIconSolid, UserIconSolid, CodesIconSolid, ListIconSolid, CommentIconSolid} from '../icons/Icons'




export const SideBar = () => {


  return (
    <>
      <div id="sidebar">
        <div className="sidebar-container">
          <ul>
            <li><a href=""><HomeIconSolid/> <h4> Home </h4> </a></li>
            <li><a href=""><UserIconSolid/> <h4> About </h4> </a></li>
            <li><a href=""><CodesIconSolid/> <h4> Studies </h4> </a></li>
            <li><a href=""><ListIconSolid/> <h4> Projects </h4> </a></li>
            <li><a href=""><CommentIconSolid/> <h4> Contact </h4> </a></li>
          </ul>
        </div>
      </div>
    </>



  )
}



