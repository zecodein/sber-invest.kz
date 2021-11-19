docker build -t sber-invest .
docker run --name=go-sber-invest-app -p 8081:8081 sber-invest