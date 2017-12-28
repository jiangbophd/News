/**
 * Created by Richard on 12/25/17.
 */

import { notification } from 'react-onsenui';
import ons from 'onsenui';
export default function checkAppUpdate() {
  "use strict";
  const onError = (error) => {
    console.log("An error occurred. " + error);
  }
  
  const onInstallSuccess = () => {
    ons.notification.alert('重新启动APP,加载最新版本，您可以继续阅读！');
    console.log("Installation succeeded.");
  };
  
  const onPackageDownloaded = (localPackage) => {
    // Install regular updates after someone navigates away from the app for more than 2 minutes
    // Install mandatory updates after someone restarts the app
    localPackage.install(onInstallSuccess, onError, { installMode: InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 120, mandatoryInstallMode: InstallMode.IMMEDIATE });
  };
  
  const onUpdateCheck = (remotePackage) =>{
    if (!remotePackage) {
      console.log("The application is up to date.");
      ons.notification.alert('已经是最新版本');
    } else {
      // The hash of each previously reverted package is stored for later use.
      // This way, we avoid going into an infinite bad update/revert loop.
      if (!remotePackage.failedInstall) {
        console.log("A CodePush update is available. Package hash: " + remotePackage.packageHash);
        ons.notification.confirm('有新版本' + remotePackage.appVersion + '是否要更新?').then((event)=>{
          if(event === 1){
            remotePackage.download(onPackageDownloaded, onError);
          }else{
      
          }
        });
      } else {
        console.log("The available update was attempted before and failed.");
      }
    }
  };
 
  window.codePush.checkForUpdate(onUpdateCheck, onError);
  
  window.codePush.notifyApplicationReady();
}
