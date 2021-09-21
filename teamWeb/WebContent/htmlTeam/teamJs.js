        /* 상단으로 가기 */
        function jw_goTop() {
            var n = window.scrollY;
            var t = setInterval(function () {
            n -= 20;
            window.scrollTo(0, n);
            if (n <= 0) {
                clearInterval(t);
            } //없으면 아래로 내리는거 X
            }, 1);
        }
        /* 헤더 메뉴바 */
        window.onload = function () {
            $(".hidescroll").hide();
          /* 채팅 시스템 */ /* 채팅 시스템 */
            var jw_butchat = document.querySelector(".jw_butchat");
            var jw_chat = document.querySelector(".jw_chat");
            var jw_chatout = document.querySelector(".jw_chatout");
            jw_butchat.addEventListener("click", function () {
                jw_chat.style.visibility = "visible";
                jw_butchat.style.visibility = "hidden";
            });
            jw_chatout.addEventListener("click", function () {
                jw_butchat.style.visibility = "visible";
                jw_chat.style.visibility = "hidden";
            });
            document.getElementById("popup_open_btn").addEventListener("click", function () {
                // 모달창 띄우기
                modal("be_login_modal");
            });
        };
        $(function () {
            $(".menu").on("mouseenter", function () {
                $(".hidescroll").stop().slideDown();
            });
            $("header").on("mouseleave", function () {
                $(".hidescroll").stop().slideUp();
            });
        });

        /* 여기부터 로그인 모달 */
        /* 로그인 모달 창 스크립트 */
        function modal(id) {
            var zIndex = 9999;
            var modal = document.getElementById(id);
            var m = modal.style.display;
    
            // 모달 div 뒤에 희끄무레한 레이어
            var bg = document.createElement("div");
            bg.setStyle({
                position: "fixed",
                zIndex: zIndex,
                left: "0px",
                top: "0px",
                width: "100%",
                height: "100%",
                overflow: "auto",
                // 레이어 색갈은 여기서 바꾸면 됨
                backgroundColor: "rgba(0,0,0,0.4)",
            });
            document.body.append(bg);

          // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
            modal.querySelector(".be_close_btn").addEventListener("click", function () {
                document.getElementById("login-name").value = "";
                document.getElementById("login-pass").value = "";
                bg.remove();
                modal.style.display = "none";
            });

            modal.setStyle({
            position: "fixed",
            display: "block",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

            // 시꺼먼 레이어 보다 한칸 위에 보이기
            zIndex: zIndex + 1,

            // div center 정렬
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
            webkitTransform: "translate(-50%, -50%)",
        });
        }

        // Element 에 style 한번에 오브젝트로 설정하는 함수 추가
        Element.prototype.setStyle = function (styles) {
            for (var k in styles) this.style[k] = styles[k];
            return this;
        };
        /* 여기까지 로그인 모달 */

        function chat(){
            var chat = document.querySelector(".jw_intext1");
            var textsec = document.querySelector(".jw_chatsec");
            if(chat.value !=""){
                var chatn = document.createElement("div");
                var chatns = document.createElement("span");
                chatn.appendChild(chatns);// 동적생성
                chatns.innerHTML=chat.value;
                chatn.setAttribute("class","cus");
                chatns.setAttribute("class","cuss");
                textsec.appendChild(chatn);
                chat.value="";
                chat.focus();
                var t = setTimeout(function(){
                    var cs = document.createElement("div");
                    var cssp = document.createElement("span");
                    cssp.innerHTML="지금은 상담이 불가능 합니다.";
                    cs.setAttribute("class","cs");
                    cssp.setAttribute("class","css");
                    cs.appendChild(cssp);
                    textsec.appendChild(cs);
                     },1000);
                     //채팅 많아지면 스크롤 추가되는 쿼리
                $('.jw_chatsec').stop().animate({ scrollTop: $('.jw_chatsec')[0].scrollHeight }, 1000);  $('.jw_chatsec').stop().animate({ scrollTop: $('.jw_chatsec')[0].scrollHeight }, 1000);
             
            }else{
                return false;
            }
        }