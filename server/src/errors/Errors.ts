// Define Error
type _error_general = {
    checkIn: {
        GET: string;
        POST_ISEMPTY: string;
        PASS: string;
    };
    checkType: {
        CHECKIS_STR: string;
        CHECKIS_INT: string;
        CHECK_LENWIDTH: string;
    };
    
    
}
export const _error_general: _error_general = {
    checkIn: {
        GET: "Error: ID is required and cannot be empty.",
        POST_ISEMPTY:"<pre style='text-align:center,font-weight:light,font-size:1rem'>ERROR  INPUTS IS INVALID OR Empty ERROR UNDEFINE </pre>",
        PASS:"<pre style='text-align:center,font-weight:light,font-size:1rem'> ENTER MIN 6 CHARATER </pre>",

    },
    checkType: {
        CHECKIS_STR:"</re>ERROR INPUT OF INTEGER VALUE !</pre>",    
        CHECKIS_INT:"</pre>ERROR INPUT OF STRING VALUE !</pre>",    
        CHECK_LENWIDTH:"</pre>ERROR THE MAX IS 5$  !</pre>"   
    },
}
