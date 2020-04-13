
// hacky.  loading this as a script, and using 'var' here, so it's available in the global space.

var flexPropData =

{
    "parentProps": [
        {
            "name": "flex-direction",
            "comment": "defines primary axis for flex layout",
            "init": "row",
            "values": [
                "row",
                "column",
                "row-reverse",
                "column-reverse"
            ]
        },
        {
            "name": "justify-content",
            "comment": "defines spacing along primary layout axis",
            "init": "center",
            "values": [
                "flex-start",
                "center",
                "flex-end",
                "space-around",
                "space-between",
                "space-evenly"
            ]
        },
        {
            "name": "align-items",
            "comment": "defines spacing along cross axis",
            "init": "center",
            "values": [
                "flex-start",
                "center",
                "flex-end",
                "stretch",
                "baseline"
            ]
        },
        {
            "name": "flex-wrap",
            "comment": "defines whether flex items can wrap into multiple lines",
            "init": "nowrap",
            "values": [
                "nowrap",
                "wrap",
                "wrap-reverse"
            ]
        },
        {
            "name": "align-content",
            "comment": "this setting only applies if flex-wrap is enabled",
            "init": "center",
            "values": [
                "start",
                "center",
                "flex-end",
                "stretch",
                "space-around",
                "space-between",
                "space-evenly"
            ]
        }
    ],

    // this stuff all needs work.  probably want to be able to assign to one or more 
    // individual items so it's easier to see the effect.

    "childProps": [
        {
            "name": "flex-basis",
            "comment": "flex-basis property...",
            "init": "0",
            "values": [
                "0",
                "auto",
                "content",
                "fill",
                "max-content",
                "min-content",
                "fit-content"
            ]
        },
        {
            "name": "flex-grow",
            "comment": "flex-grow property...",
            "init": "0",
            "values": [
                "0",
                "1",
                "2",
                "3"
            ]
        },
        {
            "name": "flex-shrink",
            "comment": "flex-shrink property...",
            "init": "0",
            "values": [
                "0",
                "1",
                "2",
                "3"
            ]
        }
    ]
};