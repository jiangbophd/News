# News
基于Cordova+React+Redux+OnsenUI的新闻热搜App实战开发

#Codepush热更新

1. npm install -g appcenter-cli

2. appcenter login

3. appcenter profile list

   appcenter app list

4. appcenter codepush deployment add -a <ownerName>/<appName> Staging
   appcenter codepush deployment add -a <ownerName>/<appName> Production

   appcenter codepush deployment list -a <ownerName>/<appName>

5. cd releases

6. appcenter codepush release -a richard.jiang-1tvl/NewsApp -c "./platforms/ios/www"  -t "*" -d "Production" -v "1.0"

