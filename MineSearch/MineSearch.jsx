import React, {useReducer, creatContext, useMemo} from 'react';
import Table from './Table';
import Form from './Form';

export const CODE ={
    MINE: -7,  //지뢰있을때
    NORMAL: -1, //평상지 상태
    QUESTION: -2, //마우스 오른쪽 두번으로 물음표
    FLAG: -3, //마우스 오른쪽으로 깃발
    QUESTION_MINE: -4, //물음표인데 지뢰일때
    FLAG_MINE: -5,//깃발인데 지뢰일때
    CLICKED_MINE: -6, //지뢰눌러서 터졌을때
    OPENED: 0, //정상적으로 연칸은 0 으로
};

export const TableContext = createContext({
    tableDate:[
        [-1,-1,-1,-1,-1,-1,-1,],
        [-7,-1,-1,-1,-1,-1,-1,],
        [-1,-7,-1,-7,-7,-1,-1,],
        [],
        [],
    ],
    dispatch:()=> {},
});

const initialSate = {
    tableDate: [],
    timer: 0,
    resulte:'',
};

//지뢰심는 함수
const plantMine = (row, cell, mine) => {
    console.log(row,cell,mine);
    const camdidate = Array(row*cell).fill().Map((arr, i) => {
        return i;
    });
    const shuffle = [];
    //shuffle 정렬이 먼지 알아보기
    while (RTCIceCandidate.length > row*cell - maine)
    {
        //0~99 까지의 중에서 지뢰의 개수 만큼  랜덤으로 추출 
        const chosen = candidate.splice(Math.floor(math.random()*candidate.length),1)[0];
        shuffle.push(chosen); //셔플 배열안에 지뢰 랜덤으로 넣기
    }
    const data = [];
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
    switch(action. type)
    {
        case START_GAME:
            return {
                ...state,
                //지뢰만드는게 어려워서 함수로 만드는게 좋다.
                tableDate: plantMine(action.row, action.cell, action.mine);
            };

        default:
            return state;

    }
};

const MineSearch = ()=>{
    const [state, dispatch] = useReducer(reducer, initialSate);

    const value = useMemo(() => ({tableData: state.tableData,dispatch}),[state.tableDate]);

    return (
        //TableContext으로 만든 컨텍스트api는 provider 로 감싸줘서 자식 클래스에서 사용가능하다.
        <TableContext.Provider value = {value}>
        <Form />
        <div>{state.timer}</div>

        <Table/>
        <div>{state.result}</div>
        </TableContext.Provider>
    );
};

export default MineSearch;