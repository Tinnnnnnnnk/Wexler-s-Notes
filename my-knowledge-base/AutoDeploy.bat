@echo off
echo [1/2] Building Docs...
call npm run docs:build

echo [2/2] Uploading with SCP...
:: 这一行和你手敲的一模一样，只是加了 -r (递归) 和 -q (静音模式，不刷屏)
:: 因为配置了免密，它不会停下来问密码
scp -r docs\.vitepress\dist\* root@8.135.49.76:/root/html

echo.
echo Done!
pause