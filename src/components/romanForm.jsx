import React from "react";

class RomanForm extends React.Component {

    render() {
        const { resultado, handleInput, converter } = this.props;
        return (
            <div className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Número
                        </label>
                        <input
                            className="appearance-none w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text" onInput={handleInput}/>
                        <p className="text-red-500 text-xs italic">Digite o valor desejado</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={converter}>
                        Converter!
                    </button>
                </div>
                <div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-last-name">
                            Resultado
                        </label>
                        <span
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                        {resultado}
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default RomanForm;