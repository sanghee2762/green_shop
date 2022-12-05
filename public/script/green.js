// 1. 컴포넌트 만들기
function WrapComponent(){

  //모달 상태관리
  const [show, setShow] = React.useState(false); //기본펄스 안보이게

  // 모달 부모 컴포넌트에서 
  // 상태변경 함수를 만든다, 
  // 그리고 자식 컴포넌트에게 프롭스로 함수를 내려주고
  // 자식 컴포넌트에서  버튼 클릭 이벤트로 상태변경 함수를 실행한다, 그러면 변경

  //모달열기 함수
  const modalOpen=()=>{
    setShow(true);
  }

  //모달 닫기 함수
  const modalClose=()=>{
    setShow(false);
  }


  return(
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
     {
       
      show && <ModalComponent modalClose={modalClose}/>
     } 
    </div>
  )
}
        function HeaderComponent(props){

          const {homePath,logoTitle,imgSrc,imgAlt,subMenu1,subMenu2,subMenu3,subMenu4,subMenu11,subMenu22,subMenu33,subMenu44} = props;

          //상태 관리 React.useState()
          const [ addClass, setAddClass ] = React.useState({
            addClass1: false,
            addClass2: false,
            addClass3: false,
            addClass4: false
          });
           // **addClass 상태관리 객체의 속성을 비구조화
          const {addClass1,addClass2,addClass3,addClass4} = addClass;

            const  onMouseEnter1 =()=>{
              setAddClass({
                addClass1: true,
                addClass2: false,
                addClass3: false,
                addClass4: false
              })
            }
            const  onMouseEnter2 =()=>{
              setAddClass({
                addClass1: false,
                addClass2: true,
                addClass3: false,
                addClass4: false
              })
            }
            const  onMouseEnter3 =()=>{
              setAddClass({
                addClass1: false,
                addClass2: false,
                addClass3: true,
                addClass4: false
              })
            }
            const  onMouseEnter4 =()=>{
              setAddClass({
                addClass1: false,
                addClass2: false,
                addClass3: false,
                addClass4: true
              })
              
            }


          //nav 떠나면 이벤트
          const onMouseLeaveAddCalss = ()=>{
            setAddClass({
              addClass1: false,
              addClass2: false,
              addClass3: false,
              addClass4: false
            })
          }
        
          return(
            <header id="header">
              <div className="left">
                   <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt}/></a></h1>
              </div>
              <div className="right">
                  <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
                    <ul>
                      <li>
                          {/* 메뉴1 */}
                          <a 
                          onMouseEnter ={onMouseEnter1} 
                          href="#" 
                          className = {`main-btn  ${addClass1 && 'on'}`} 
                          title="재단소개"
                          >재단소개</a>
                          
                          <div className={`sub sub1 ${addClass1 && 'on'}`}>
                            <div className="container">
                              <ul>
                                <li> 
                                  <ul>
                                      {
                                        subMenu1.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#" title="설립취지">설립취지</a></li>
                                    <li><a href="#" title="연혁">연혁</a></li>
                                    <li><a href="#" title="찾아오시는길">찾아오시는길</a></li> */}
                                  </ul>
                                </li>
                                <li> 
                                  <ul>
                                      {
                                        subMenu11.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li> 
                                  <ul>
                                      {
                                        subMenu11.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li> 
                                  <ul>
                                      {
                                        subMenu11.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                              </ul>
                            </div>
                          </div>
                      </li>
                      <li>
                          {/* 메뉴2 */}
                          <a
                            onMouseEnter ={onMouseEnter2} 
                           href="#"
                           className = {`main-btn ${addClass2 && 'on'}`} 
                           title="후원하기"
                           >후원하기</a>

                          <div className={`sub sub2 ${addClass2 && 'on'}`}>
                            <div className="container">
                              <ul>
                                <li>
                                  <ul>
                                      {
                                        subMenu2.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">국내후원</a></li>
                                    <li><a href="#">국외후원</a></li>
                                    <li><a href="#">맞춤후원</a></li> */}
                                  </ul>
                                </li>
                                <li>
                                  <ul>
                                      {
                                        subMenu22.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                      {
                                        subMenu22.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                      {
                                         subMenu22.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                              </ul>
                            </div>
                          </div>
                      </li>
                      <li>
                          {/* 메뉴3 */}
                          <a 
                            onMouseEnter ={onMouseEnter3} 
                          href="#"
                          className = {`main-btn ${addClass3 && 'on'}`} 
                          title="자료실"
                          >자료실</a>
                         <div className={`sub sub3 ${addClass3 && 'on'}`}>
                            <div className="container">
                              <ul>
                                <li>
                                  <ul>
                                      {
                                        subMenu3.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>     
                                          )
                                        })
                                      }
                                    {/* <li><a href="#" title="서식자료실">서식자료실</a></li>
                                    <li><a href="#" title="사진자료실">사진자료실</a></li>
                                    <li><a href="#" title="후원양식">후원양식</a></li> */}
                                  </ul>
                                </li>
                                <li>
                                  <ul>
                                     {
                                         subMenu33.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                      {
                                        subMenu33.map((item,idx)=>{
                                          return(
                                              <li key ={idx}><a href="#" title={item}>{item}</a></li>
                                            )
                                          })
                                        }
                                        {/* <li><a href="#" title="서브메뉴1">서브메뉴1</a></li>
                                        <li><a href="#" title="서브메뉴2">서브메뉴2</a></li>
                                        <li><a href="#" title="서브메뉴3">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                    {
                                       subMenu33.map((item,idx)=>{
                                         return(
                                             <li key ={idx}><a href="#" title={item}>{item}</a></li>
                                           )
                                         })
                                    }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                              </ul>
                            </div>
                          </div>
                      </li>
                      <li>
                          {/* 메뉴4 */}
                          <a
                            onMouseEnter ={onMouseEnter4} 
                          href="#"
                          className = {`main-btn ${addClass4 && 'on'}`} 
                          title="스토리"
                          >스토리</a>
                           <div className={`sub sub4 ${addClass4 && 'on'}`}>
                            <div className="container">
                              <ul>
                                <li>
                                  <ul>
                                       {
                                        subMenu4.map((item,idx)=>{
                                          return(
                                            <li key={idx}><a href="#" title={item}>{item}</a></li>
                                            
                                          )
                                        })
                                      }
                                    {/* <li><a href="#" title="웹진">웹진</a></li>
                                    <li><a href="#" title="보고서">보고서</a></li>
                                    <li><a href="#" title="나의후원">나의후원</a></li> */}
                                  </ul>
                                </li>
                                <li>
                                  <ul>
                                     {
                                      subMenu44.map((item,idx)=>{
                                        return(
                                          <li key={idx}><a href="#" title={item}>{item}</a></li>
                                        )
                                      })
                                     }
                                    {/* <li><a href="#" title="서브메뉴1">서브메뉴1</a></li>
                                    <li><a href="#" title="서브메뉴2">서브메뉴2</a></li>
                                    <li><a href="#" title="서브메뉴3">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                     {
                                      subMenu44.map((item,idx)=>{
                                        return(
                                          <li key={idx}><a href="#" title={item}>{item}</a></li>
                                        )
                                      })
                                     }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                                <li>
                                  <ul>
                                     {
                                      subMenu44.map((item,idx)=>{
                                        return(
                                          <li key={idx}><a href="#" title={item}>{item}</a></li>
                                        )
                                      })
                                     }
                                    {/* <li><a href="#">서브메뉴1</a></li>
                                    <li><a href="#">서브메뉴2</a></li>
                                    <li><a href="#">서브메뉴3</a></li> */}
                                  </ul>                      
                                </li>
                              </ul>
                            </div>
                          </div>
                      </li>
                    </ul>
                  </nav>
              </div>
            </header>
          )
        }
        HeaderComponent.defaultProps = {
          logoTitle:'Green복지재단',
          homePath:'./index.html',
          imgSrc:'./images/logo.png',
          imgAlt:'Green복지재단 Logo',
          subMenu1:['설립취지','연혁','찾아오시는길'],
          subMenu11:['서브메뉴1','서브메뉴2','서브메뉴3'],

          subMenu2:['국내후원','국외후원','맞춤후원'],
          subMenu22:['서브메뉴1','서브메뉴2','서브메뉴3'],

          subMenu3:['서식자료실','사진자료실','후원양식'],
          subMenu33:['서브메뉴1','서브메뉴2','서브메뉴3'],

          subMenu4:['웹진','보고서','나의후원'],
          subMenu44:['서브메뉴1','서브메뉴2','서브메뉴3']
        }


        function MainComponent(){
          return(
            <main id="main">
                <Section1Component/>
                <Section2Component/>
            </main>
          )
        }
            function Section1Component(){
              return(
                <section id="section1">                
                    <div className="slide-container">
                        <div className="slide-view">
                          <ul className="slide-wrap">
                              <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt=""/></a></li>
                              <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt=""/></a></li>
                              <li className="slide slide2"><a href="#" title="그린복지재단2"><img src="./images/img2.jpg" alt=""/></a></li>
                              <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt=""/></a></li>
                              <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt=""/></a></li>
                          </ul>
                        </div>
                    </div>
                </section>
              )
            }
            function Section2Component({notice,gallery, modalOpen}){

              // 공지사항,갤러리 상태관리
              const [show, setShow]= React.useState(false);

              const onClickNoticeBbtnEvnt =(e)=>{ 
                 e.preventDefault();
                  setShow(false); //안보인다.
                  }
                const onClickGalleryBbtnEvnt =(e)=>{
                  e.preventDefault();
                  setShow(true)  //보인다
                }

                //공지사항 클릭 이벤트 => 모달 띄우기 
                const onClickModal=(e)=>{
                  e.preventDefault();
                  //최상위 위치의 모달 열기 함수 실행
                  modalOpen();
                }

              return(
                <section id="section2">
                    <div className="left board">
                      <button onClick={onClickNoticeBbtnEvnt}  className="notice-btn">공지사항</button>
                        <div className="notice-box board-box">
                          <div className="gap">
                             <ul>
                              {
                                notice.map((item,idx)=>{
                                    return(
                                      <li key ={idx}><a href="#" onClick={idx === 0 && onClickModal} className={idx === 0 && 'modal-btn'}>{item.공지글}</a><span>{item.날짜}</span></li>
                                    )
                                  })
                                }                 
                               
                             </ul>  
                          </div>
                        </div>
                    </div>
                    <div className="center board">
                        <button className="gallery-btn">갤러리</button>
                      <div className="gallery-box board-box">
                              {
                                 gallery.map((item,idx)=>{
                                  return(
                                   <a href="#" title={item.제목}><img src={item.이미지소스} alt=""/></a>
                                  )
                                })
                              }
                          {/* <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1"/></a>
                          <a href="#" title="icon1"><img src="./images/icon2.png" alt="icon1"/></a>
                          <a href="#" title="icon1"><img src="./images/icon3.png" alt="icon1"/></a> */}
                  
                      </div>
                    </div>  
                    <div className="right">
                        <div className="banner">
                          <div className='title'><h2>EVENT BANNER</h2></div>
                          <div className="img-box">
                             <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
                          </div>
                        </div>
                    </div>  
                </section>
              )
            }
            // 기본 프롭스만들기  (프롭스는 여기 내용이 바뀌면 다 바껴서 나온다)
            Section2Component.defaultProps={
              notice :[
                {공지글:'Green 복지재단 공지사항2', 날짜:'2022-12-22'},
                {공지글:'Green 복지재단 공지사항2', 날짜:'2022-12-21'},
                {공지글:'Green 복지재단 공지사항2', 날짜:'2022-12-09'},
                {공지글:'Green 복지재단 공지사항2', 날짜:'2022-12-05'},
              ],
              gallery :[
                {제목:"icon1",이미지소스:"./images/icon1.png" },
                {제목:"icon2",이미지소스:"./images/icon2.png" },
                {제목:"icon3",이미지소스:"./images/icon3.png" }
              ]

            }


        function FooterComponent(){
          return(
            <footer id="footer">
                <div className="left">
                    <h1><a href="#" title="Logo"><img src="./images/footerLogo.png" alt="Logo"/></a></h1>
                </div>
                <div className="center">   
                  <div className="row1">
                      <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
                      <span><i>|</i></span>
                      <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
                      <span><i>|</i></span>
                      <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
                  </div>
                  <div className="row2">
                      <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
                  </div>
            
                </div>  
                <div className="right">    
                    <select name="family" id="family">
                          <option value="" selected>패밀리 사이트</option>
                          <option value="패밀리사이트1">패밀리사이트1</option>
                          <option value="패밀리사이트2">패밀리사이트2</option>
                          <option value="패밀리사이트3">패밀리사이트3</option>
                    </select>      
                </div>  
          </footer>
          )
        }
        function ModalComponent({modalClose}){
          const onClickModalClose=(e)=>{
            e.preventDefault();
            modalClose();
          }

          return(
            <div class="modal">
            <div class="wrap">
              <div class="container">
                <div class="gap">     
                  <div class="title">
                    <h1>복지재단 공지사항</h1>
                  </div>
                  <div class="content">        
                    <ol>
                      <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                      <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                      <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
                    </ol>                       
                  </div>
                  <div class="button-box">
                    <button onClick={onClickModalClose} class="modal-close-btn">닫기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        }
      

      ReactDOM.render(
        <WrapComponent/>,
        document.getElementById('root')
     );

