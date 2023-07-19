import './slider.css'


// Arrows or bond offer page slider
export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }


  export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (   
      <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />     
    );
  }



// Arrows for homepage slider
  export function HomeNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          width: 40,
          height: 40,
          marginTop:"200px",
          // marginRight:"40px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }


  export function HomePrevArrow(props) {
    const { className, style, onClick } = props;
    return (   
      <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: 40,
        height: 40,
        marginTop:"200px",
        marginLeft:"40px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />     
    );
  }