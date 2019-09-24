import React, { Component } from 'react';
import {Title} from '../common/Common';

class BoardList extends Component {
    constructor(props) {
        super(props)
        this.state={
            pageTitle:'게시판',
            boardTitle:[
                {
                    seq:1,
                    title:'게시판 제목 1'
                },
                {
                    seq:2,
                    title:'게시판 제목 2'
                },
                {
                    seq:3,
                    title:'게시판 제목 3'
                },
                {
                    seq:4,
                    title:'게시판 제목 4'
                },
                {
                    seq:5,
                    title:'게시판 제목 5'
                },
                {
                    seq:6,
                    title:'게시판 제목 6'
                },
                {
                    seq:7,
                    title:'게시판 제목 7'
                },
                {
                    seq:8,
                    title:'게시판 제목 8'
                },
                {
                    seq:9,
                    title:'게시판 제목 9'
                },
                {
                    seq:10,
                    title:'게시판 제목 10'
                },
                {
                    seq:11,
                    title:'게시판 제목 11'
                },
                {
                    seq:12,
                    title:'게시판 제목 12'
                },
                {
                    seq:13,
                    title:'게시판 제목 13'
                },
                {
                    seq:14,
                    title:'게시판 제목 14'
                },
                {
                    seq:15,
                    title:'게시판 제목 15'
                },
                {
                    seq:16,
                    title:'게시판 제목 16'
                },
                {
                    seq:17,
                    title:'게시판 제목 17'
                },
                {
                    seq:18,
                    title:'게시판 제목 18'
                },
                {
                    seq:19,
                    title:'게시판 제목 19'
                },
                {
                    seq:20,
                    title:'게시판 제목 20'
                },
                {
                    seq:21,
                    title:'게시판 제목 21'
                },
                {
                    seq:22,
                    title:'게시판 제목 22'
                },
                {
                    seq:23,
                    title:'게시판 제목 23'
                },
                {
                    seq:24,
                    title:'게시판 제목 24'
                },
                {
                    seq:25,
                    title:'게시판 제목 25'
                },
                {
                    seq:26,
                    title:'게시판 제목 26'
                },
                {
                    seq:27,
                    title:'게시판 제목 27'
                },
                {
                    seq:28,
                    title:'게시판 제목 28'
                },
                {
                    seq:29,
                    title:'게시판 제목 29'
                },
                {
                    seq:30,
                    title:'게시판 제목 30'
                },
                {
                    seq:31,
                    title:'게시판 제목 31'
                },
                {
                    seq:32,
                    title:'게시판 제목 32'
                },
                {
                    seq:33,
                    title:'게시판 제목 33'
                },
                {
                    seq:34,
                    title:'게시판 제목 34'
                },
                {
                    seq:35,
                    title:'게시판 제목 35'
                },
                {
                    seq:36,
                    title:'게시판 제목 36'
                },
                {
                    seq:37,
                    title:'게시판 제목 37'
                },
                {
                    seq:38,
                    title:'게시판 제목 38'
                },
                {
                    seq:39,
                    title:'게시판 제목 39'
                },
                {
                    seq:40,
                    title:'게시판 제목 40'
                },
                {
                    seq:41,
                    title:'게시판 제목 41'
                },
                {
                    seq:42,
                    title:'게시판 제목 42'
                },
                {
                    seq:43,
                    title:'게시판 제목 43'
                },
                {
                    seq:44,
                    title:'게시판 제목 44'
                },
                {
                    seq:45,
                    title:'게시판 제목 45'
                },
                {
                    seq:46,
                    title:'게시판 제목 46'
                },
                {
                    seq:47,
                    title:'게시판 제목 47'
                },
                {
                    seq:48,
                    title:'게시판 제목 48'
                },
                {
                    seq:49,
                    title:'게시판 제목 49'
                },
                {
                    seq:50,
                    title:'게시판 제목 50'
                },
                {
                    seq:51,
                    title:'게시판 제목 51'
                },
                {
                    seq:52,
                    title:'게시판 제목 52'
                },
                {
                    seq:53,
                    title:'게시판 제목 53'
                },
                {
                    seq:54,
                    title:'게시판 제목 54'
                },
                {
                    seq:55,
                    title:'게시판 제목 55'
                },
                {
                    seq:56,
                    title:'게시판 제목 56'
                },
                {
                    seq:57,
                    title:'게시판 제목 57'
                },
                {
                    seq:58,
                    title:'게시판 제목 58'
                },
            ],
            //5개씩 나눈 페이지 배열
            newSliceList:[
                // ================== this.boardListFnc();
                // [{seq,title}],[{seq,title}]...[{seq,title}]
            ],
            //현재페이지
            currentPage:1,
            //전체 페이지
            totalPage:1,
            //총 페이지 갯 수 리스트
            pgaeList :[
                // ================== this.pageListFnc();
                // 1,2,3,4,5,6...12
            ],
            newPageArrays:[
                //페이지리스트를 5개씩 나눈 새로운 배열(pgaeList group)
            ],
            //페이지의 인덱스
            newPageArraysIndex:0,
        }
    }

    render() {
        // console.log('PLF',this.state.newSliceList.length);
        // console.log(this.state.currentPage)
        
        return (
            <div>
                <Title text={this.state.pageTitle}/>
                <p className="pageState">{this.state.currentPage} of { this.state.totalPage}</p>
                <ul className="boardContent">
                    {
                        this.state.newSliceList.map((v,i)=>{
                            // console.log('>>>>>>>>>>>>>>',this.state.newSliceList[this.state.pageIndex]);
                            return(
                                <li className="list" key={i}>
                                    <span>{v.seq}</span> 
                                    <a href="#" className="listTitle">{v.title}</a>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                
                <ul className="btnGroup">
                    <li><button onClick={()=>this.firstPaging()} disabled={this.state.currentPage === 1 ? true : false}>처음</button></li>
                    <li><button onClick={()=>this.prevPaging()} disabled={this.state.currentPage === 1 ? true : false}>이전</button></li>
                    <li>
                        {/* 페이지 번호 분할(5개 단위로) */}
                        <ol className="pageNumberList">
                            {
                                this.state.pgaeList.map((page,pageIndex)=>{
                                    return(
                                        <li key={pageIndex}><a href="#" onClick={()=>this.clickNumber(page)} className={page === this.state.currentPage ? 'currentPageCss' : null}>{page}</a></li>
                                    )
                                })
                            }
                           
                            {/* <li><a href="#" className="currentPageCss">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li> */}
                        </ol>
                    </li>
                    <li><button onClick={()=>this.nextPaging()} disabled={this.state.currentPage === this.state.pgaeList.length ? true : false}>다음</button></li>
                    <li><button onClick={()=>this.lastPaging()} disabled={this.state.currentPage === this.state.pgaeList.length ? true : false}>맨끝</button></li>
                </ul>
            </div>

        );
    }

    componentDidMount(){
        this.boardListFnc();
        // this.paging();
    }


    // componentDidUpdate(prevProps, prevState) {
    //     this.pageListFnc();
    //     //업데이트 후에 다시 setState되고 다시 되고 반복반복반복반복 (무한루프)
    // }
    
    firstPaging=()=>{
        this.setState({
            currentPage:1
        },()=> this.boardListFnc())
    }
    prevPaging=()=>{
        let prev = this.state.currentPage-1
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',prev)
        this.setState({
            currentPage:prev
        },()=> this.boardListFnc())
    }
    lastPaging=()=>{
        this.setState({
            currentPage:this.state.pgaeList.length
        },()=> this.boardListFnc())
    }
    nextPaging=()=>{
        let next = this.state.currentPage+1
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',next)
        this.setState({
            currentPage:next
        },()=> this.boardListFnc())
    }

    boardListFnc=()=>{
        let sliceListArray = [];
        // ========================= 리스트 5개로 나누기
        for(let i=0; i<this.state.boardTitle.length; i+=5){
            // 게시판 5개로 자르기
            // console.log(i)
            let sliceList = this.state.boardTitle.slice(i,i+5)
            // console.log('>>>>>>>>',sliceList)
            
            sliceListArray.push (sliceList);
        };
        // console.log(sliceListArray)
        // console.log(sliceListArray[1])

        this.setState({
            newSliceList:sliceListArray[this.state.currentPage-1],
        },()=>{
            // 페이지 리스트 콜백으로 불러옴
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',this.state.currentPage)
            this.pageListFnc();
        })
    }

    pageListFnc=()=>{
        // =============================== 페이지 숫자 리스트
        let test = Math.ceil(this.state.boardTitle.length/5)
        let pageArray = [];
        let pageLists = [];
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>',test)
        for(let k =0; k<test; k++){
            pageArray.push(k+1);
        }
        console.log('pageArray',pageArray)


        for(let i = 0; i < pageArray.length; i+=5){
            pageLists = pageArray.slice(i,i+5);
            // this.state.pgaeList.push(pageLists)
            // console.log(pageLists,'pageLists');
            this.state.newPageArrays.push(pageLists);
        }
        // newPageArrays[[12345],[678910],[1112]]

        console.log('this.state.newPageArray',this.state.newPageArrays)
        

        this.setState({
            totalPage:test,
            pgaeList:pageArray,
        })
    }

    // pageGroupFnc=()=>{
    //     if(this.state.pgaeList.length > 5){
    //         //페이지가 5개가 넘으면 잘라서 나누어야 함
    //         // let newPageArray = []
    //         for(let i = 0; i<this.state.pgaeList.length; i+=5){
    //            let pageList = this.state.pgaeList.slice(i,i+5);
    //            this.state.newPageArrays.push(pageList)
    //         }
    //         console.log('>>>>>>>>>>>>>',this.state.newPageArrays)
    //     }
    // }

    clickNumber=(page)=>{
        // ============================== 숫자 눌렀을 때 게시판 리스트 이동
        // console.log(this.state.pgaeList);
        // console.log(page)
        this.setState({
            currentPage:page,
        },()=> this.boardListFnc());
        
    }

}

export default BoardList;