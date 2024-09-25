import Technology from "./technology";

function Technologies() {
    return (
        <div className="p-4 grid grid-flow-col grid-cols-4 grid-rows-2 bg-jsDark mx-20 rounded-md text-black my-10 ">
            <Technology label="JavaScript" />
            <Technology label="TypeScript" />
            <Technology label="NextJs" /> <Technology label="NodeJs" />{" "}
            <Technology label="React" /> <Technology label="ExpressJs" />{" "}
            <Technology label="Python" />{" "}
            <Technology label="SQL (Mas adelante)" />
        </div>
    );
}

export default Technologies;
