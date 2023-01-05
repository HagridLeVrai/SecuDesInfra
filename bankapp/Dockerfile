
FROM python:3.11.1-bullseye

WORKDIR /python-docker

RUN apt-get update

COPY . .

RUN pip3 install flask pyjwt pysqlite3 shadowd

RUN mkdir /etc/shadowd

RUN cp connectors.ini /etc/shadowd/

# RUN groupadd -g 999 appuser && \
#     useradd -r -u 999 -g appuser appuser
# USER appuser

CMD [ "./server.py" ]