
FROM python:3.11.1-bullseye

WORKDIR /python-docker

COPY . .

RUN pip3 install flask pyjwt pysqlite3

#CMD [ "./app/server.py" ]
CMD [ "curl", "10.10.10.2" ]