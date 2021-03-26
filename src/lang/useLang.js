import {useSelector} from "react-redux";
import * as appSelector from "../store/app/selectors";

export default function useLang (lang = 'ru_RU') {
    lang = useSelector (appSelector.getLang);
    let langPackStore = useSelector (appSelector.getLangPack);
    let langPack=langPackStore[lang];
    let result = {};
    Object.keys(langPack)?.map(key => {
        result = {...result,...langPack[key]};
    });
    return (function (prop) {
        let isArray=false;
        let words=[];
        let returnWords=[];
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if(Array.isArray(prop)){
            isArray=true;
            words=prop;
        }else{
            words=[prop];
        }
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        words.map(word=>{
            let char=word[0];
            let findProp=word.toLowerCase();
            let charUpper=false;
            if(char === char.toUpperCase()){
                charUpper=true;
            }
            let findResult = result[findProp];
            let returnText = word;
            if(findResult!==undefined){
                if(charUpper===true){
                    returnText=findResult.substr(0,1).toUpperCase()+findResult.substr(1);
                }else{
                    returnText=findResult;
                }
            }
            returnWords=[...returnWords,returnText];
        })
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RETURN
        if(isArray===true){
            return returnWords;
        }else{
            return returnWords[0];
        }

    });
}
