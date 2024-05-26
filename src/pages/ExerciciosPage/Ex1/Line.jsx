function Line(props) {
    return (
        <>
            <tr><td style={{ fontSize: props.tam + 'pt' }}>Linha {props.index + 1}</td></tr>
        </>
    );
}

export default Line;