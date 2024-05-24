const DocsPage = ({params} : {params : {id: Array<string>}}) => {

    return (
        <div>
            <h1>Docs page: {params.id.join(' / ')}</h1>
        </div>
    )
}

export default DocsPage