FROM golang:1.16.3
LABEL Authors="ZeCodeIn"
LABEL Version="1.0"
RUN mkdir /app 
ADD . /app/ 
WORKDIR /app 
RUN go build -o main ./cmd/
CMD ["/app/main"]