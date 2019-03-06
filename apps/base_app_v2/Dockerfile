FROM bgv-nexustest01.pt.playtech.corp/bet/adminui/pbsnode:latest

COPY . ${STATIC_DIR}/

RUN cd ${STATIC_DIR} \
	&& while IFS='' read -r line || [[ -n "$line" ]]; do npm install $line; done < "components.txt" \
	&& npm cache clean --force
