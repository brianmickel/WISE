var nodeContentIsDirty = false;

function getStudentData() {
    return null;
}

function setContent(content) {
    if (mode === 'author') {
        $('#nodeContentJSON').html(content);
        $('#nodeContentJSON').keyup(function() {
            nodeContentIsDirty = true;
            $('#saveNodeContentButton').attr('disabled', false);
        });
    } else {
        $('#studentView').html(content);
    }
}

function setStudentData(studentData) {
    
}

function saveNodeContent(callback, callbackArgs) {
    if (mode === 'author') {
        var nodeContentJSON = $('#nodeContentJSON').val();
        saveNodeContentToWISE(nodeContentJSON, callback, callbackArgs);
    }   
}

function saveButtonClicked() {
    var studentData = getStudentData();
    saveStudentData(studentData);
}


function nodeOnExit(wiseMessageId) {
    if (mode === 'author') {
        if (nodeContentIsDirty) {
            var doSave = confirm("Save before exiting? OK=YES, Cancel=NO");
            if (doSave) {
                // save, then exit
                saveNodeContent(function(callbackArgs) {
                    sendNodeOnExitResponse(callbackArgs.wiseMessageId);
                },{wiseMessageId:wiseMessageId});
                sendNodeOnExitResponse(wiseMessageId);
            } else {
                // don't save, just exit
                sendNodeOnExitResponse(wiseMessageId);
            }
        } else {
            // don't save, just exit
            sendNodeOnExitResponse(wiseMessageId);
        }
    } else {
        sendNodeOnExitResponse(wiseMessageId);
    }
}

$(document).ready(function() {
    if (mode === 'author') {
        $('#studentView').hide();
        $('#authorView').show(); 
        $('#saveNodeContentButton').click(function() {
            saveNodeContent(function() {
                $('#saveNodeContentButton').attr('disabled', true);
                nodeContentIsDirty = false;
            });
        });
        loadWISEData();
    } else {
        $('#authorView').hide();
        $('#studentView').show();  
        loadWISEData({loadAllNodeStates:true});
    }
});