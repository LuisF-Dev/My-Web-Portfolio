type className = {
    className: string;
};

function ThreeSquare({ className }: className) {
    return (
        <div className="flex flex-row">
            {" "}
            {/* flex horizontal */}
            <div className={className}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                ex dicta mollitia ducimus. Id minima quidem est tempora
                explicabo illum.
            </div>{" "}
            {/* tres recuadros */}
            <div className={className}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, delectus ratione dicta dolores similique sed adipisci
                eius magni deserunt excepturi.
            </div>
            <div className={className}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, expedita nam! Consectetur voluptas sequi
                voluptatibus asperiores? Repudiandae facere quidem tenetur.
            </div>
        </div>
    );
}

export default ThreeSquare;
