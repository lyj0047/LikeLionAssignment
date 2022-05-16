function Hello({color,name,age,univ,hobby,favfood,favcolor,music}) {
  
  return <div style={{ color }}>
    <p>안녕하세요 {name}입니다.</p> 
    <p>{age}살 입니다.</p>
    <p>{univ}대학교에 재학중 입니다.</p>
    <p>취미는 {hobby}입니다.</p>
    <p>좋아하는 음식은{favfood}입니다.</p>
    <p>좋아하는 색깔은 {favcolor}입니다.</p>
    <p>제가 요즘 듣는 노래는 "{music}"입니다.</p>
    <p>저와 얼마나 취향이 일치하는 카운팅 해보세용</p>
    </div>
}

export default Hello;