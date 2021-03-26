import React,{Fragment} from "react";
import {CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Grid} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import RefreshIcon from '@material-ui/icons/Refresh';
import PropTypes from "prop-types"

Dropdown.propTypes = {
    filter: PropTypes.bool,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onOpen: PropTypes.func,
    onRefresh: PropTypes.func,
    optionLabel: PropTypes.string,
    optionValue: PropTypes.string,
    optionEnableArgument: PropTypes.string,
    optionEnableStyle: PropTypes.object,
    optionDisableStyle: PropTypes.object,
    optionPrefixArgument:PropTypes.string,
    optionPrefixSchema:PropTypes.object,
    name: PropTypes.string,
    none: PropTypes.bool,
    noneValue: PropTypes.any,
    noneLabel: PropTypes.string,
    showNonExistentOption: PropTypes.bool
}

function Dropdown (
    {
        filter = true,
        readonly = false,
        isLoading = false,
        style,
        label,
        placeholder,
        name,
        options,
        value,
        onChange,
        onOpen=(()=>null),
        onRefresh,
        optionLabel,
        optionValue,
        none,
        noneValue="",
        noneLabel="None",
        optionEnableArgument = '',
        optionEnableStyle,
        optionDisableStyle,
        optionPrefixSchema,
        optionPrefixArgument='',
        showNonExistentOption=false
    }
) {

    let labelID = "select_label" + (name?"_" + name + "_":"") + Math.random ();
    let newOptions=[];

    let findValue=null;
    let newValue=value;

    if(options && options.length > 0){
        if(none===true){
            newOptions.push(
                <MenuItem value={noneValue}><em>{noneLabel}</em></MenuItem>
            );
        }
        options.map ((option, index) => {
            if(value && value !== '' && option[optionValue || 'id']===value){
                findValue=option;
            }
            newOptions.push(
                <MenuItem
                    key={index}
                    value={option[optionValue || 'id']}
                    style={optionEnableArgument !== '' && option?.[optionEnableArgument] !==false ? optionEnableStyle : optionDisableStyle}
                >
                    {optionPrefixArgument===''?
                        option[optionLabel || 'label' || 'name']
                        :
                        <Fragment>
                            {optionPrefixSchema?.[option?.[optionPrefixArgument]]}
                            <b>{option[optionLabel || 'label' || 'name']}</b>
                        </Fragment>
                    }
                </MenuItem>
            );
        })
    }

    if(showNonExistentOption===true){

    }else{
        if(findValue===null){
            filter===true?newValue=null:newValue='';
        }
    }

    return (
        <Grid container>
            <Grid item style={{flex: 1}}>
                {filter===true?
                    <Autocomplete
                        value={findValue}
                        style={{width: "100%"}}
                        options={options}
                        renderOption={(option)=>{
                            return (
                                <Fragment>
                                    {optionPrefixSchema?.[option?.[optionPrefixArgument]]}
                                    {option?.[optionLabel || 'label' || 'name']}
                                </Fragment>
                            )
                        }}
                        getOptionLabel={(option) => option?.[optionLabel || 'label' || 'name']}
                        getOptionSelected={(option,value)=>option?.[optionValue || 'id']===findValue?.[optionValue || 'id']}
                        onChange={(event,value) => {
                            onChange({
                                target:{value:value?.[optionValue || 'id']}
                            })
                        }}
                        renderInput={(params) => {
                            return <TextField {...params} label={label} variant="outlined" />
                        }}
                    />
                    :
                    <FormControl style={{width: "100%"}} variant="outlined">
                        {label ?
                            <InputLabel
                                //shrink
                                id={labelID}
                            >
                                {label}
                            </InputLabel>
                            :
                            null
                        }
                        <Select
                            readOnly={readonly}
                            endAdornment={onRefresh &&
                            <IconButton
                                style={{marginRight: 10}}
                                color="primary"
                                size={"small"}
                                disabled={isLoading}
                                onClick={onRefresh}
                            >
                                {isLoading ?
                                    <CircularProgress size={21}/>
                                    :
                                    <RefreshIcon/>
                                }
                            </IconButton>
                            }
                            //displayEmpty
                            disabled={isLoading}
                            style={{width: "100%"}}
                            placeholder={placeholder}
                            value={options && options.length > 0 ? !isLoading ? newValue : 'loading' : 'clear'}
                            onChange={onChange}
                            onOpen={onOpen}
                            labelId={labelID}
                            label={label}
                            name={name}
                        >
                            {none===true && <MenuItem value={noneValue}><em>{noneLabel}</em></MenuItem>}
                            {options && options.length > 0 ?
                                isLoading &&
                                <MenuItem value="loading"><em>Загрузка...</em></MenuItem>
                                :
                                <MenuItem value="clear"><em>Список пуст...</em></MenuItem>
                            }
                            {newOptions}
                        </Select>
                    </FormControl>
                }
            </Grid>
        </Grid>
    )
}

export default Dropdown;
