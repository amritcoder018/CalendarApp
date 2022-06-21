import Document from './DocumentBlock';
import Content from "./DocContent";

function Documents()
{
 const mapfuc=(prop)=>{
 return <Document key={prop.id} heading={prop.heading} src={prop.src}  />
 }

    return (<div class="about">
    <h1>Documents</h1>
    {Content.map(mapfuc)}
</div>);
}

export default Documents;