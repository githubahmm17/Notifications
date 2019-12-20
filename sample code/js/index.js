var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



//
//section 1
//
function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 1000}); 	
}
        	

//
//section 2
//
function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Awesome!', 'Sucks']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}

   
   
//
//section 3
//
function createNotification() {

        		
    			
    //
    //setup notification
    //
	cordova.plugins.notification.local.schedule({ 
    	id: 	1,
        title: 	"Hey you",
        text: 	"This is an example notification",
        trigger: { in: 10, unit: 'second' }
   	});
    
}