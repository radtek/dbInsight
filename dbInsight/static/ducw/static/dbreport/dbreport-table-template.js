/*
* dbreport-table-template - v1.0.0 - 2018-02-07
* Ѳ�챨����ģ�棬�����������յ�dbreport-table.js�ļ�
*
* Copyright (c) 2018 duchengwen
* mail: duchengwen@gmail.com
* QQ:   23828728
* ΢��: 18047120719
* 
*********************************************************************************************
** Version | Complete Time    | Description                                                **
**---------|------------------|------------------------------------------------------------**
**     1.0 | 2018-02-07 17:50 | First Edition                                              **
*********************************************************************************************
*/

var TableInit = function (tableID, columnDefine, tableDataValue) {
	var oTableInit = new Object();
	
	//��ʼ��Table
	oTableInit.Init = function () {
		$('#' + tableID).bootstrapTable({
		toolbar: '#toolbar',                //���߰�ť���ĸ�����
		striped: true,                      //�Ƿ���ʾ�м��ɫ
		cache: false,                       //�Ƿ�ʹ�û��棬Ĭ��Ϊtrue������һ���������Ҫ����һ��������ԣ�*��
		pagination: true,                   //�Ƿ���ʾ��ҳ��*��
		sortable: true,                     //�Ƿ���������
		sortOrder: "asc",                   //����ʽ
		//queryParams: oTableInit.queryParams,//���ݲ���
		//sidePagination: "server",           //��ҳ��ʽ��client�ͻ��˷�ҳ��server����˷�ҳ��*��
		pageNumber:1,                       //��ʼ�����ص�һҳ��Ĭ�ϵ�һҳ
		pageSize: 10,                       //ÿҳ�ļ�¼������*��
		pageList: [10, 25, 50, 100],        //�ɹ�ѡ���ÿҳ��������*��
		search: true,                       //�Ƿ���ʾ����������������ǿͻ�������������������
		showExport: true,
		exportDataType: 'basic',              //basic', 'all', 'selected'.
		exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],  //�����ļ�����  
		showToggle:true,                    //�Ƿ���ʾ��ϸ��ͼ���б���ͼ���л���ť
		cardView: false,                    //�Ƿ���ʾ��ϸ��ͼ
		detailView: false,                  //�Ƿ���ʾ���ӱ�
		columns: columnDefine,
		data: tableDataValue,
		});
	};

	return oTableInit;
};