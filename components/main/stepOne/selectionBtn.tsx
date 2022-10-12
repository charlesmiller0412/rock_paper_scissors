import Image from "next/image";
export const SelectionBtn = (props: any, id: any) => {
    return (
        <div className={props.className} id={id} onClick={props.onClick}>
            <div className="selectionBtn__dark">
                <div className="selectionBtn__light">
                    <div className="selectionBtn__gray">
                        <div className="selectionBtn__white">
                            <div className="selectionBtn__white--icon">
                                <Image
                                    src={props.source}
                                    alt="paper"
                                    layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
