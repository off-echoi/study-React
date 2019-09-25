import React, { Component } from 'react';
import {Title} from '../common/Common';

class BoardRe extends Component {
    constructor(props) {
        super(props)
        this.state={
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
            // 리스트 출력 개수
            showList:5,
            //현재 페이지
            currentPage:1,

            /* 리스트 =================================================== */
            // showList(5개)로 나누어진 리스트
            sliceList:[],
            //현재 보이는 리스트들
            thisList:[],
            
            /* 페이지 ================================================== */
            //showList(5개)로 나누어진 페이지 넘버
            pageSlice:[],
            //현재 보이는 페이지 넘버
            thisPageNum:[]
        }
    }

    render() {
        return(
        <div>
            <Title text = {'게시판'}/>
            <p className="pageState">{this.state.currentPage} of {this.state.sliceList.length}</p>
            <ul className="boardContent">
                {
                    this.state.thisList.map((v,i)=>{
                        return(
                            <li className="list" key={v+i}>
                                <span>{v.seq}</span>
                                <a href="#" className="listTitle">{v.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="btnGroup">
                    <li><button onClick={this.fistPaging} disabled={this.state.currentPage === 1 ? true :false}>맨앞</button></li>
                    <li><button onClick={this.prevPaging} disabled={this.state.currentPage === 1 ? true :false}>이전</button></li>
                    <li>
                        {/* 페이지 번호 분할(5개 단위로) */}
                        <ol className="pageNumberList">
                            {
                                this.state.thisPageNum.map((page,j)=>{
                                    return(
                                        <li key={j} onClick={()=>this.movePageFnc(page)}><a href="#" className={page === this.state.currentPage ? 'currentPageCss' : null}>{page}</a></li>
                                    )
                                })
                            }
                            {/* <li><a href="#" className="currentPageCss">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li> */}
                        </ol>
                    </li>
                    <li><button onClick={this.nextPaging} disabled={this.state.currentPage === this.state.sliceList.length ? true :false}>다음</button></li>
                    <li><button onClick={this.lastPaging} disabled={this.state.currentPage === this.state.sliceList.length ? true :false}>맨끝</button></li>
                </ul>
        </div>
    )}
    componentDidMount() {
        this.boardListFnc();
        this.pagingFnc();
    }
    // ======================== 페이지 출력
    boardListFnc=()=>{
        //리스트 showList(5개)로 나눔
        // let sliceList = [];
        while(this.state.boardTitle.length > 0){
            this.state.sliceList.push(this.state.boardTitle.splice(0,this.state.showList))
        }
        // console.log(sliceList);
        this.setState({
            thisList : this.state.sliceList[this.state.currentPage-1]
        });
    }
    // ======================= 페이지 숫자 출력
    pagingFnc=(page)=>{
        let pageAll = [];
        // let pageSlice = [];
        for(let i = 0; i<this.state.sliceList.length ; i++){
            pageAll.push(i+1)
        }
        // console.log(pageAll) [1,2,3,4,5,....12] (리스트 갯수)
        while(pageAll.length>0){
            this.state.pageSlice.push(pageAll.splice(0,this.state.showList))
        }
        // console.log(this.state.pageSlice[this.state.currentPage])
        this.setState({
            thisPageNum: this.state.pageSlice[0],
        });
    }
    // ========================= 숫자 눌렀을때 이동
    movePageFnc=(page)=>{
        // console.log(page)
        this.setState({
            currentPage: page,
        },()=>this.boardListFnc());
    }
    // ========================= 맨앞 버튼
    fistPaging=()=>{
        this.setState({
            currentPage : 1
        },()=> this.boardListFnc());
        
    }
    // ========================= 이전 버튼
    prevPaging=()=>{
        let prev = this.state.currentPage-1;
        this.setState({
            currentPage:prev
        },()=> this.boardListFnc())
    }
    // ======================== 다음 버튼
    nextPaging=()=>{
        let next = this.state.currentPage+1;
        console.log(this.state.pageSlice);
        //지금 배열의 마지막이 5의 배수이면(showList의 배수))  다음배열로 넘어가기   아니면 가만히 있기
        this.state.pageSlice.forEach((v,i,ele)=>{
            console.log(ele,';l;;;')
            console.log(v,i,ele)
        })
        // for(let i = 0; i<this.state.pageSlice.length ; i++){
        //     if(this.state.currentPage === this.state.pageSlice[i].length-1){
        //         console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',this.state.pageSlice[i])
        //     }
        // }

        this.setState({
            currentPage:next
        },()=> this.boardListFnc())
    }
    // ======================== 맨끝 버튼
    lastPaging=()=>{
        this.setState({
            currentPage: this.state.sliceList.length
        },()=> this.boardListFnc())
    }
}

export default BoardRe;