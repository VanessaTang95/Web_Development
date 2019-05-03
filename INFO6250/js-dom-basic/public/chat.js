//jshint esversion:6
(function IIFE() {
  'use strict';
  //login section, disable the login button if no username input
  const loginButton = document.querySelector(".login button");
  const userNameField = document.querySelector(".login input");
  if (userNameField && loginButton) {

    loginButton.disabled = !userNameField.value;
    userNameField.addEventListener('input', (e) => {
      if (e.target.value) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    });
  }




  // chat section
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
  if (toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener('input', (e) => {
      if (e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    });
  }

  //user listen
  const selectedUsers = document.querySelectorAll(".user");
  const selectedSenders = document.querySelectorAll(".message .sender-info");
  //  if (selectedUsers&&selectedMessage){
  /*when select user,
  1. username change color
  2. only show the messages from that user
  3. have a unselect button adding to function getUserList's
  // */
  // selectToChangeColor(selectedUsers);
  // selectSpecificMessage(selectedUsers,selectedSenders);
  //  }
  selectUser();

  function selectUser() {
    const userLists = document.getElementsByClassName("user");
    for (let user of userLists) {
      user.onclick = function() {
        if (this.style.backgroundColor === "") {
          //user selected

          this.style.backgroundColor = "#00a8b5";
          this.style.color = "white";
          //add button
          // if (typeof(btn)==="undefined") {
          //only if btn not exist, add button
          let btn = document.getElementsByClassName("unselect-btn")[0];

          if (!btn) {
            //  console.log("creating button!");
            addButton(document.getElementsByClassName("users")[0]);
          } else {
            btn.style.visibility = "visible";
          }

          //message lists changes
          let userName = user.innerText;
          console.log(userName + " :message session change");
          selectSpecificMessage(this, document.getElementsByClassName("sender-info"));

        } else{
          reset();
          hideUnselectButton();
          removeIndicators();
        }

      };
    }

  }



  function reset() {
    // console.log("reset start!");
    const messages = document.getElementsByClassName("message");
    const users = document.getElementsByClassName("user");

    for (let e of users) {
      e.style.backgroundColor = "";
      e.style.color = "";
    }

    for (let e of messages) {
      e.style.display = "";
    }

    removeIndicators();
  }

  function removeIndicators() {
    //clear indicators
    let indicators = document.querySelectorAll(".message .indicator-msg");
    for (let indicator of indicators) {
      indicator.remove();
    }
  }

  function addButton(position) {
    let btn = document.createElement("button");
    btn.innerText = "Unselect All";
    btn.classList.add("unselect-btn");
    btn.style.visibility = "visible";
    btn.addEventListener('click', () => {
      reset();
      hideUnselectButton();
    });
    position.appendChild(btn);
    // console.log("button is all set!");
  }

  function hideUnselectButton() {
    const button = document.getElementsByClassName("unselect-btn")[0];
    if (button) {
      button.style.visibility = "hidden";
    }
  }

  function selectSpecificMessage(selectedUser, messageLists) {
    const messageFromTheUser = [];
    let userName = selectedUser.innerText;
    for (let i = 0; i < messageLists.length; i++) {
      let messageUserName = messageLists[i].innerText.replace(/[\r\n]/g, "").replace(/\ +/g, "");
      if (userName === messageUserName) {
        messageFromTheUser.push(i);
      }
    }

    //set all message panel to invisible
    //the reason second choice part covered the selected one is here
    //if current page didn't have selected message, then make all message div to none
    let divs = document.getElementsByClassName("message");
    let messageContainer = document.getElementsByClassName("messages")[0];
    let cur_indicators=document.getElementsByClassName("indicator-msg");

    for (let e of divs) {
      if(cur_indicators){
        removeIndicators();
      }
      if (e.style.display === "") {
        e.style.display = "none";
      }
    }

    //then make the messages from same user's panel visible

    for (let j = 0; j < divs.length; j++) {
      if (messageFromTheUser.includes(j)) {
        divs[j].style.display = "block";
        if (j > 0 && divs[j - 1].style.display === "none") {
          addIndicator(divs[j]);
        }
      }
    }

    if((messageFromTheUser[messageFromTheUser.length-1])<divs.length-1){
            addIndicatorToBottom(divs[messageFromTheUser[messageFromTheUser.length-1]]);
    }


}



  function addIndicator(position) {
    let indicator = document.createElement("div");
    indicator.classList.add("indicator-msg");
    indicator.innerText = "Hide message from unselected users";
    indicator.style.border = "solid";
    indicator.style.backgroundColor = "#ebefd0";
    position.insertBefore(indicator, position.firstChild);
  }

  function addIndicatorToBottom(position){
      let indicator = document.createElement("div");
      indicator.classList.add("indicator-msg");
      indicator.innerText = "Hide message from unselected users";
      indicator.style.border = "solid";
      indicator.style.backgroundColor = "#ebefd0";
      position.appendChild(indicator);
  }


})();
