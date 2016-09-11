angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaVibration, $cordovaNativeAudio) {
    $scope.Vibrar = function(){
        try{
          $cordovaVibration.vibrate(1000);  
        }
        catch (err){
          console.log(err);
        }
    }

    $scope.DetenerVibrar = function(){
        try{
          $cordovaVibration.vibrate(0);
        }
        catch(err){
          console.log(err);
        }
    }

    $scope.Sonido = function(){
      try{
        $cordovaNativeAudio.play('sonido1');  
      }
      catch (err){
        console.log("En la página no voy a poder hacer funcionar el sonido. Usar el celular");
      }
    }

})

.controller('ChatsCtrl', function($scope, Chats) {


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
