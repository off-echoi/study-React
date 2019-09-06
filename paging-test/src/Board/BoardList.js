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
            ],
            newSliceList:[],
            //
            currentPage:0,
            // 총 페이지 갯 수 ===> 페이징 번호에 들어가야 함
            pageNumber:1,

        }
    }

    render() {
        return (
            <div>
                <Title text={this.state.pageTitle}/>
                <p className="pageState">{this.state.currentPage } of { this.state.pageNumber}</p>
                <ul className="boardContent">
                    {
                        this.state.boardTitle.map((v,i)=>{
                            return(
                                <li className="list">
                                    <span>{v.seq}</span> 
                                    <a href="#" className="listTitle">{v.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                
                <ul className="btnGroup">
                    <li><button>처 음</button></li>
                    <li><button>이전</button></li>
                    <li>
                        {/* 페이지 번호 분할(10개 단위로) */}
                        <ol className="pageNumberList">
                            <li><a href="#" className="currentPage">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                        </ol>
                    </li>
                    <li><button>다음</button></li>
                    <li><button>끝</button></li>
                </ul>
            </div>

        );
    }

    componentDidMount(){
        this.boardListFnc();
        this.paging();
    }
    paging=()=>{
      
    }
    boardListFnc=()=>{
        let sliceListArray = [];
        //리스트 10개로 나누기
        for(let i=0; i<this.state.boardTitle.length; i+=5){
            // 게시판 5개로 자르기
            // console.log(i)
            let sliceList = this.state.boardTitle.slice(i,i+5)
            // console.log('>>>>>>>>',sliceList)
            
            sliceListArray.push (sliceList);
        };
        console.log(sliceListArray)
        this.setState({
            pageNumber:sliceListArray.length
        })
    }
}

export default BoardList;