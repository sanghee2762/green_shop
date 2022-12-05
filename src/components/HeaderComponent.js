import React from 'react';

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

  return (
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
                    href="!#" 
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
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#" title="설립취지">설립취지</a></li>
                              <li><a href="!#" title="연혁">연혁</a></li>
                              <li><a href="!#" title="찾아오시는길">찾아오시는길</a></li> */}
                            </ul>
                          </li>
                          <li> 
                            <ul>
                                {
                                  subMenu11.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li> 
                            <ul>
                                {
                                  subMenu11.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li> 
                            <ul>
                                {
                                  subMenu11.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
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
                    href="!#"
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
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">국내후원</a></li>
                              <li><a href="!#">국외후원</a></li>
                              <li><a href="!#">맞춤후원</a></li> */}
                            </ul>
                          </li>
                          <li>
                            <ul>
                                {
                                  subMenu22.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                                {
                                  subMenu22.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                                {
                                  subMenu22.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
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
                    href="!#"
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
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>     
                                    )
                                  })
                                }
                              {/* <li><a href="!#" title="서식자료실">서식자료실</a></li>
                              <li><a href="!#" title="사진자료실">사진자료실</a></li>
                              <li><a href="!#" title="후원양식">후원양식</a></li> */}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {
                                  subMenu33.map((item,idx)=>{
                                    return(
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                                {
                                  subMenu33.map((item,idx)=>{
                                    return(
                                        <li key ={idx}><a href="!#" title={item}>{item}</a></li>
                                      )
                                    })
                                  }
                                  {/* <li><a href="!#" title="서브메뉴1">서브메뉴1</a></li>
                                  <li><a href="!#" title="서브메뉴2">서브메뉴2</a></li>
                                  <li><a href="!#" title="서브메뉴3">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                              {
                                subMenu33.map((item,idx)=>{
                                  return(
                                      <li key ={idx}><a href="!#" title={item}>{item}</a></li>
                                    )
                                  })
                              }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
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
                    href="!#"
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
                                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                      
                                    )
                                  })
                                }
                              {/* <li><a href="!#" title="웹진">웹진</a></li>
                              <li><a href="!#" title="보고서">보고서</a></li>
                              <li><a href="!#" title="나의후원">나의후원</a></li> */}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {
                                subMenu44.map((item,idx)=>{
                                  return(
                                    <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                  )
                                })
                              }
                              {/* <li><a href="!#" title="서브메뉴1">서브메뉴1</a></li>
                              <li><a href="!#" title="서브메뉴2">서브메뉴2</a></li>
                              <li><a href="!#" title="서브메뉴3">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                              {
                                subMenu44.map((item,idx)=>{
                                  return(
                                    <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                  )
                                })
                              }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
                            </ul>                      
                          </li>
                          <li>
                            <ul>
                              {
                                subMenu44.map((item,idx)=>{
                                  return(
                                    <li key={idx}><a href="!#" title={item}>{item}</a></li>
                                  )
                                })
                              }
                              {/* <li><a href="!#">서브메뉴1</a></li>
                              <li><a href="!#">서브메뉴2</a></li>
                              <li><a href="!#">서브메뉴3</a></li> */}
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
  );
};

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


export default HeaderComponent;