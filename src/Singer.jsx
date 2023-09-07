export default function Singer({info}) {
    // console.log(info);
    return (
        <div style={{
            margin: '20px',
            padding: '20px',
            border: '2px solid tomato',
            borderRadius: '10px' 
        }}>
            <h3>Name: {info.name}</h3>
            <p>Age: {info.age}</p>
        </div>
    )
}